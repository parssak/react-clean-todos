import { ITask } from "../utils/tasks.utils";
import { atom, useRecoilState } from "recoil";

const tasksState = atom({
  key: "tasksState",
  default: [] as ITask[],
});

const useTasks = () => {
  const [tasks, setTasks] = useRecoilState<ITask[]>(tasksState);

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (taskID: string) => {
    setTasks(
      tasks.map((task) =>
        task._id === taskID ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskID: string) => {
    const updatedTasks = tasks.filter((task) => taskID !== task._id);
    setTasks(updatedTasks);
  };

  return { tasks, addTask, toggleTask, removeTask };
};

export default useTasks;
