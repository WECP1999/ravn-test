import { gql } from '@apollo/client';

const GET_TASKS = gql`
  query {
    tasks(input: {}) {
      name
      id
      createdAt
      id
      pointEstimate
      status
      tags
      dueDate
      assignee {
        id
        avatar
        type
        email
        fullName
      }
    }
  }
`;

export default GET_TASKS;
