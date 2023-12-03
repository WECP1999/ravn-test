import TaskCard from '../../components/taskCard';
import { useContext } from 'react';
import availableStatuses from '../../utils/mocks/availableStatuses';
import { Skeleton, Text } from '../../components/shared/commons';
import TaskContext from '../../context/tasksContext/TaskContext';
import 'twin.macro';

const Dashboard = () => {
  const taskContext = useContext(TaskContext);

  if (taskContext?.error) return <>Ups ocurrio un error</>;

  return (
    <div tw="flex flex-row gap-8 w-full justify-between">
      {availableStatuses.map((status) => (
        <div
          key={status.value}
          tw="flex flex-col gap-4 w-full max-w-[348px]"
        >
          <Text tw="font-semibold text-[18px]">
            {status.label} ({taskContext?.tasks[status.value]?.length})
          </Text>
          <div tw="flex flex-col gap-4 w-full max-h-[736px] overflow-y-auto">
            {taskContext?.tasks[status.value] &&
              !taskContext?.loading &&
              taskContext?.tasks[status.value].map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                />
              ))}

            {taskContext?.loading && (
              <>
                <Skeleton tw="h-52 rounded-[8px]" />
                <Skeleton tw="h-52 rounded-[8px]" />
                <Skeleton tw="h-52 rounded-[8px]" />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
