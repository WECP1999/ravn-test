import { useContext, useMemo, useRef, useState } from 'react';
import ITask from '../../utils/interfaces/ITask';
import estimatePoints from '../../utils/mocks/estimatePoints';
import { Avatar, Chip, Text } from '../shared/commons';
import {
  TagContainer,
  TaskCardBody,
  TaskCardContainer,
  TaskCardFooter,
  TaskCardHeader,
  TaskCardWrapper,
} from './styles/style';
import More from 'remixicon-react/MoreFillIcon';
import formatDate from '../../utils/functions/formatDate';
import Alarm from 'remixicon-react/AlarmLineIcon';
import AssigneeIcon from 'remixicon-react/UserFillIcon';
import EditIcon from 'remixicon-react/PencilLineIcon';
import DeleteIcon from 'remixicon-react/DeleteBinLineIcon';
import TaskContext from '../../context/tasksContext/TaskContext';
import CreateModalContext from '../../context/createModalContext/CreateModalContext';
import useClickOutside from '../../utils/hooks/useClickOutside';
import {
  SelectOption,
  SelectOptionsContainer,
} from '../forms/customSelect/styles/style';
import DeleteModal from './components/deleteModal';
import 'twin.macro';

type TaskCardProps = {
  task: ITask;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const taskContext = useContext(TaskContext);
  const creteTaskModalContext = useContext(CreateModalContext);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => {
    setIsOpen(false);
  });

  const date = useMemo(() => {
    const currentDate = new Date();
    const taskDate = new Date(task.dueDate);
    const formedDate = formatDate(taskDate);

    if (taskDate < currentDate) {
      if (formedDate === 'today') {
        return {
          type: 'on-time',
          date: formatDate(taskDate),
        };
      }

      return {
        type: 'late',
        date: formatDate(taskDate),
      };
    }

    return {
      type: 'on-time',
      date: formatDate(taskDate),
    };
  }, [task]);

  const handleSelectedTask = () => {
    if (taskContext && creteTaskModalContext) {
      taskContext.setSelectedTask(task);
      creteTaskModalContext.setShowModal(true);
    }
  };

  return (
    <TaskCardWrapper>
      <TaskCardContainer>
        <TaskCardHeader ref={menuRef}>
          <Text tw="font-bold text-[18px] text-neutral-1">{task.name}</Text>
          <More
            tw="text-neutral-2 w-5 cursor-pointer"
            onClick={() => setIsOpen((value) => !value)}
          />
          <SelectOptionsContainer
            tw="right-0 left-auto"
            isOpen={isOpen}
          >
            <SelectOption
              className="has-avatar"
              onClick={handleSelectedTask}
            >
              <EditIcon />
              Edit
            </SelectOption>
            <SelectOption
              className="has-avatar"
              onClick={() => setDeleteModal(true)}
            >
              <DeleteIcon />
              Delete
            </SelectOption>
          </SelectOptionsContainer>
        </TaskCardHeader>
        <TaskCardBody>
          <div tw="w-full flex flex-row justify-between">
            <Text>
              {
                estimatePoints.find(
                  (point) => point.value === task.pointEstimate
                )?.label
              }
            </Text>

            <Chip className={date.type}>
              <Alarm />
              <Text tw="uppercase">{date.date}</Text>
            </Chip>
          </div>
          <TagContainer>
            {task.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </TagContainer>
        </TaskCardBody>
        <TaskCardFooter>
          {task.assignee.avatar ? (
            <Avatar
              src={task.assignee.avatar}
              tw="w-8 h-8"
            />
          ) : (
            <AssigneeIcon />
          )}
        </TaskCardFooter>
      </TaskCardContainer>
      <DeleteModal
        show={deleteModal}
        onClose={() => setDeleteModal(true)}
        task={task}
        refetch={taskContext?.refetch}
      />
    </TaskCardWrapper>
  );
};

export default TaskCard;
