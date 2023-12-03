import { gql } from '@apollo/client';

const UPDATE_TASK = gql`
  mutation updateTask($updateInput: UpdateTaskInput!) {
    updateTask(input: $updateInput) {
      id
    }
  }
`;

export default UPDATE_TASK;
