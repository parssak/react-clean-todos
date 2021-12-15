import React, { ReactElement, useState } from "react";
import useTasks from "../hooks/useTasks";
import { generateTask } from "../utils/tasks.utils";
import TaskItem from "./TaskItem";

export default function TaskList(): ReactElement {
  const { tasks, addTask } = useTasks();
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleAddTask = () => {
    const newTask = generateTask(taskTitle);
    addTask(newTask);
    setTaskTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      />
      {tasks.map((task) => (
        <TaskItem task={task} key={task._id} />
      ))}
    </div>
  );
}
