import React, { ReactElement } from 'react'
import { ITask } from '../utils/tasks.utils'

interface Props {
  task: ITask;
  toggleTask: (taskID: string) => void;
  removeTask: (taskID: string) => void;
}

export default function TaskItem({ task, toggleTask, removeTask }: Props): ReactElement {
  return (
    <div>
      <input type="checkbox" onClick={() => toggleTask(task._id)} checked={task.completed} />
      {task.title}
      <button onClick={() => removeTask(task._id)}>Delete task</button>
    </div>
  )
}
