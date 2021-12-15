import React, { ReactElement } from "react";
import useTasks from "../hooks/useTasks";
import { ITask } from "../utils/tasks.utils";

interface Props {
  task: ITask;
}

export default function TaskItem({ task }: Props): ReactElement {
  const { toggleTask, removeTask } = useTasks();

  return (
    <div>
      <input
        type="checkbox"
        onClick={() => toggleTask(task._id)}
        checked={task.completed}
      />
      {task.title}
      <button onClick={() => removeTask(task._id)}>Delete task</button>
    </div>
  );
}
