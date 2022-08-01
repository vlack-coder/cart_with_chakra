import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation register($data: RegisterInput!) {
    register(data: $data) {
      email
    }
  }
`;