import { useState } from "react";
import { ITask } from "../utils/tasks.utils";

const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
  }

  const toggleTask = (taskID: string) => {
    const task = tasks.find(task => taskID === task._id);
    if (!task) return;
    task.completed = !task.completed;
    setTasks([...tasks, task]);
  }

  const removeTask = (taskID: string) => {
    const updatedTasks = tasks.filter(task => taskID !== task._id);
    setTasks(updatedTasks);
  }

  return { tasks, addTask, toggleTask, removeTask };
}
export default useTasks;