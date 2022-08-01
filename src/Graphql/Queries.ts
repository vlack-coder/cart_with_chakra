import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation register($data: RegisterInput!) {
    register(data: $data) {
      email
    }
  }
`;
export const GET_PRODUCTS = gql`
  query {
    allProducts {
      id
      name
      description
      sku
      price
      image
    }
  }
`;
