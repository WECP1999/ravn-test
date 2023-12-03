import IUser from './IUser';

interface ITask {
  id: string;
  assignee: IUser;
  name: string;
  dueDate: Date;
  tags: Array<string>;
  pointEstimate: string;
  status: string;
}

export default ITask;
