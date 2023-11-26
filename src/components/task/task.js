import { useState } from 'react';

import TaskCreateTime from './task-create-time';
import ClearTask from './clear-task';
import TaskChanger from './task-changer';
import Timer from './timer';
import './task.scss';

const Task = (props) => {
  const {
    taskId,
    onDeleted,
    onChangeCompleted,
    isChecked,
    label,
    time,
    startStopTimer,
    isRunning,
    createTime,
  } = props;

  const [isCompleted, setIsCompleted] = useState(isChecked);
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(label);

  const checkTask = () => {
    setIsCompleted(() => !isCompleted);
  };

  const changeTask = () => {
    setIsEditing(() => !isEditing);
  };

  const labelClass = isCompleted ? 'completed' : '';

  if (isEditing) {
    return (
      <form
        className="task__item"
        onSubmit={(e) => {
          e.preventDefault();
          changeTask();
        }}
      >
        <input
          className="edit"
          type="text"
          autoFocus
          defaultValue={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </form>
    );
  }

  return (
    <li className="task__item">
      <input
        className="task__item-input"
        type="checkbox"
        id={taskId}
        checked={isChecked}
        onChange={() => {
          checkTask();
          onChangeCompleted(taskId);
        }}
      />
      <label className={labelClass} htmlFor={taskId}>
        <span className="description">{taskText}</span>
        <Timer
          time={time}
          startTimer={startStopTimer}
          taskId={taskId}
          isRunning={isRunning}
        ></Timer>
        <TaskCreateTime createTime={createTime} />
      </label>
      <TaskChanger onChangeTask={changeTask} />
      <ClearTask onDeleted={onDeleted} taskId={taskId} />
    </li>
  );
};

export default Task;
