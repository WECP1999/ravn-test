import 'twin.macro';
import 'react-datepicker/dist/react-datepicker.css';
import { useMemo, useCallback, useContext } from 'react';
import { ModalBody } from './styles/style';
import Modal from '../../../../components/modal';
import { Button } from '../../../../components/shared/commons';
import { FormProvider, useForm } from 'react-hook-form';
import CustomInput from '../../../../components/forms/customInput';
import CustomSelect from '../../../../components/forms/customSelect';
import EstimateIcon from 'remixicon-react/GamepadFillIcon';
import AssigneeIcon from 'remixicon-react/UserFillIcon';
import LabelIcon from 'remixicon-react/PriceTag3FillIcon';
import DueDateIcon from 'remixicon-react/CalendarCheckLineIcon';
import estimatePoints from '../../../../utils/mocks/estimatePoints';
import CustomMultiSelect from '../../../../components/forms/customSelect/customMultiSelect';
import taskTags from '../../../../utils/mocks/taskTags';
import CustomDatePicker from '../../../../components/forms/customDatePicker/CustomDatePicker';
import { FetchResult, useMutation, useQuery } from '@apollo/client';
import type IAssignee from '../../../../utils/interfaces/IAssignee';
import GET_USERS from '../../../../utils/graphql/querys/getUsers';
import statuses from '../../../../utils/mocks/statuses';
import CREATE_TASK from '../../../../utils/graphql/mutations/createTask';
import TaskContext from '../../../../context/tasksContext/TaskContext';
import UPDATE_TASK from '../../../../utils/graphql/mutations/updateTask';
import toast from 'react-hot-toast';

type CreateTaskModalProps = {
  show: boolean;
  onClose: () => void;
};

const CreateTaskModal = ({ show, onClose }: CreateTaskModalProps) => {
  const taskContext = useContext(TaskContext);
  const { data, loading } = useQuery<{ users: Array<IAssignee> }>(GET_USERS);
  const [createTask, { loading: createTaskLoading }] =
    useMutation<CreateTaskInput>(CREATE_TASK);
  const [updateTask, { loading: updateTaskLoading }] =
    useMutation<CreateTaskInput>(UPDATE_TASK);

  const formValues = useMemo(() => {
    if (taskContext?.selectedTask) {
      const {
        name,
        assignee: { id: assigneeId },
        pointEstimate,
        tags,
        dueDate,
        status,
      } = taskContext?.selectedTask;
      return {
        name,
        assigneeId,
        pointEstimate,
        tags,
        dueDate: new Date(dueDate),
        status,
      };
    }
    return {
      name: '',
      pointEstimate: '',
      assigneeId: '',
      tags: [],
      dueDate: undefined,
      status: '',
    };
  }, [taskContext?.selectedTask]);
  const methods = useForm({
    mode: 'all',
    criteriaMode: 'all',
    values: formValues,
  });

  const assignees = useMemo(() => {
    if (data) {
      return data.users.map(({ avatar, fullName, id }) => ({
        value: id,
        label: fullName,
        avatar,
      }));
    }

    return [];
  }, [data]);

  const handleOnlCose = useCallback(() => {
    if (taskContext) {
      taskContext.setSelectedTask(undefined);
    }
    onClose();
  }, [onClose, taskContext]);

  const handleSubmit = useCallback(
    async (values: any) => {
      try {
        let response: FetchResult<CreateTaskInput>;
        if (taskContext?.selectedTask) {
          response = await updateTask({
            variables: {
              updateInput: {
                ...values,
                id: taskContext.selectedTask.id,
              },
            },
          });
        } else {
          response = await createTask({
            variables: { createInput: values },
          });
        }

        if (!response.errors && taskContext) {
          toast.success(
            `The task selected has been ${
              taskContext.selectedTask ? 'updated' : 'created'
            }!`,
            {
              duration: 5000,
            }
          );
          taskContext.refetch();
          handleOnlCose();
        }
      } catch (error) {
        console.error(error);
      }
    },
    [taskContext, methods]
  );

  return (
    <Modal
      isClosable={false}
      show={show}
      onClose={handleOnlCose}
    >
      <ModalBody>
        <FormProvider {...methods}>
          <CustomInput
            name="name"
            tw="w-full text-xl text-neutral-1 placeholder:text-neutral-2 placeholder:font-bold"
            placeholder="Task Title"
          />
          <div tw="w-full flex flex-row gap-4">
            <CustomSelect
              icon={<EstimateIcon />}
              name="pointEstimate"
              label="Estimate"
              options={estimatePoints}
            />
            <CustomSelect
              icon={<AssigneeIcon />}
              name="assigneeId"
              label="Assignee"
              loading={loading}
              options={assignees}
            />
            <CustomMultiSelect
              icon={<LabelIcon />}
              name="tags"
              label="Tags"
              menuLabel="Tag title"
              options={taskTags}
            />
            <CustomDatePicker
              icon={<DueDateIcon />}
              name="dueDate"
              label="Due date"
            />
            <CustomSelect
              icon={<EstimateIcon />}
              name="status"
              label="Status"
              options={statuses}
            />
          </div>
          <div tw="w-full flex flex-row gap-4 justify-end">
            <Button
              typeButton="text"
              onClick={handleOnlCose}
            >
              Cancel
            </Button>
            <Button onClick={methods.handleSubmit(handleSubmit)}>
              {createTaskLoading || updateTaskLoading ? (
                <div tw="mx-auto aspect-square h-full max-h-[20px] w-5 min-w-[20px] max-w-[20px] animate-spin rounded-full border-4 border-r-neutral-1" />
              ) : taskContext?.selectedTask ? (
                'Update'
              ) : (
                'Create'
              )}
            </Button>
          </div>
        </FormProvider>
      </ModalBody>
    </Modal>
  );
};

export default CreateTaskModal;
