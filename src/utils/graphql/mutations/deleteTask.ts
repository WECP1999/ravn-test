import { gql } from '@apollo/client';

const DELETE_TASK = gql`
  mutation deleteTask($deleteTaskInput: DeleteTaskInput!) {
    deleteTask(input: $deleteTaskInput) {
      id
    }
  }
`;

export default DELETE_TASK;
