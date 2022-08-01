import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

export const createGQLClient = () => {
  const cache = new InMemoryCache({
    resultCaching: false,
    addTypename: false,
  });

  const httpLink = new HttpLink({
    uri: "http://localhost:5000/graphql",
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log(`werkin`);
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      throw networkError;
      // throw new Error("bad network");
    }
    // if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
      },
      mutate: {
        fetchPolicy: "no-cache",
      },
    },
  });

  const query = (name: any, query: any, variables: any) => {
    return client
      .query({
        query,
        variables,
        fetchPolicy: "no-cache",
      })
      .then(({ data }) => {
        // console.log("data", data);
        return data[name];
      })
      .catch((e) => {
        throw e;
      });
  };

  const mutate = async (name: any, mutation: any, variables: any) => {
    try {
      const response = await client.mutate({
        mutation,
        variables,
      });
      const { data, errors } = response || {};
      // if()
      return data[name];
    } catch (error) {
      console.log(`e`, { error });
      throw error;
    }
  };

  return { query, mutate };
};

// export default GraphQLClient = {
//   query,
//   mutate,
// };
