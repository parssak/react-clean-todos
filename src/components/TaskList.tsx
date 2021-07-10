import React, { ReactElement, useState } from 'react'
import useTasks from '../hooks/useTasks';
import { generateTask } from '../utils/tasks.utils';
import TaskItem from './TaskItem';


export default function TaskList(): ReactElement {
  
  const { tasks, toggleTask, addTask, removeTask } = useTasks();
  
  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleAddTask = () => {
    const newTask = generateTask(taskTitle); // Taken from task.utils.ts
    addTask(newTask); // Taken from useTasks.tsx
    setTaskTitle(''); // Actual UI state logic
  }

  return (
    <div>
      <input type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAddTask()} />
      {
        tasks.map(task => <TaskItem task={task} toggleTask={toggleTask} removeTask={removeTask}  key={task._id} />)
      }
    </div>
  )
}
