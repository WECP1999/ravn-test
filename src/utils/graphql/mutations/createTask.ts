import { gql } from '@apollo/client';

const CREATE_TASK = gql`
  mutation createTask($createInput: CreateTaskInput!) {
    createTask(input: $createInput) {
      id
    }
  }
`;

export default CREATE_TASK;
