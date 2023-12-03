import { useMutation } from '@apollo/client';
import DELETE_TASK from '../../../../utils/graphql/mutations/deleteTask';
import Modal from '../../../modal';
import { ModalBody } from './styles/style';
import { Button, Text } from '../../../shared/commons';
import QuestionMark from 'remixicon-react/QuestionLineIcon';
import { useCallback } from 'react';
import ITask from '../../../../utils/interfaces/ITask';
import toast from 'react-hot-toast';
import 'twin.macro';

type DeleteModalProps = {
  show: boolean;
  onClose: () => void;
  task: ITask;
  refetch?: () => void;
};

const DeleteModal = ({ show, onClose, task, refetch }: DeleteModalProps) => {
  const [deleteTask, { loading }] = useMutation(DELETE_TASK);

  const handleDeleteTask = useCallback(async () => {
    try {
      const response = await deleteTask({
        variables: { deleteTaskInput: { id: task.id } },
      });

      if (!response.errors && refetch) {
        toast.success('The selected task have been deleted!');
        refetch();
        onClose();
        return;
      }
    } catch (error) {}
  }, [deleteTask, task]);

  return (
    <Modal
      show={show}
      onClose={onClose}
      isClosable
    >
      <ModalBody>
        <div tw="w-full text-center flex flex-col gap-4 justify-center items-center gap-4">
          <QuestionMark
            tw="text-primary-4"
            size="60px"
          />
          <Text tw="text-[18px]">
            Are you sure you want to delete the selected task{' '}
            <b>({task.name})</b>?
          </Text>
        </div>

        <div tw="w-full flex flex-row gap-4 justify-end">
          <Button
            typeButton="text"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button onClick={handleDeleteTask}>
            {loading ? (
              <div tw="mx-auto aspect-square h-full max-h-[20px] w-5 min-w-[20px] max-w-[20px] animate-spin rounded-full border-4 border-r-neutral-1" />
            ) : (
              'Delete'
            )}
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;
