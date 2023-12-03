import { gql } from '@apollo/client';

const GET_USERS = gql`
  query {
    users {
      avatar
      id
      fullName
    }
  }
`;

export default GET_USERS;
