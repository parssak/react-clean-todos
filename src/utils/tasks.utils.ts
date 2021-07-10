import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  _id: string;
  title: string;
  completed: boolean;
}

export const generateTask = (taskTitle: string): ITask => {
  return {
    _id: uuidv4(),
    title: taskTitle,
    completed: false
  }
}
