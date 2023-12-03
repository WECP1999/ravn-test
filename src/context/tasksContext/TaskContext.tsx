import {
  ApolloError,
  ApolloQueryResult,
  OperationVariables,
  useQuery,
} from '@apollo/client';
import React, { useMemo, createContext, useState } from 'react';
import ITask from '../../utils/interfaces/ITask';
import GET_TASKS from '../../utils/graphql/querys/getTasks';

type TaskProviderProps = {
  children: React.ReactNode;
};

type TaskContextState = {
  tasks: Record<string, ITask[]>;
  selectedTask: ITask | undefined;
  setSelectedTask: React.Dispatch<React.SetStateAction<ITask | undefined>>;
  loading: boolean;
  error?: ApolloError;
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<
    ApolloQueryResult<{
      tasks: Array<ITask>;
    }>
  >;
};

const TaskContext = createContext<TaskContextState | null>(null);

export default TaskContext;

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [selectedTask, setSelectedTask] = useState<undefined | ITask>();
  const { data, loading, error, refetch } = useQuery<{ tasks: Array<ITask> }>(
    GET_TASKS
  );

  const tasks = useMemo(() => {
    const auxTasks = {} as Record<string, ITask[]>;
    if (data) {
      for (const task of data.tasks) {
        const statusTask = auxTasks[task.status] || [];
        auxTasks[task.status] = [...statusTask, task];
      }
    }

    return auxTasks;
  }, [data]);

  return (
    <TaskContext.Provider
      value={{ tasks, loading, error, refetch, selectedTask, setSelectedTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
