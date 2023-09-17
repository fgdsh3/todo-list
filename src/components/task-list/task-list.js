import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import './task-list.scss';

const TaskList = (props) => {
  const { onDeleted, onChangeCompleted, filteredTasks, handleSetTaskList } = props

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSetTaskList((prevTasks) =>
        prevTasks.map((task) => {
          return task.isRunning ? { ...task, time: task.time - 1 } : task
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const startTimer = (taskId) => {
    handleSetTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isRunning: true } : task
      )
    );
  };

  const stopTimer = (taskId) => {
    handleSetTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isRunning: false } : task
      )
    );
  };

  return (
    <main className='main'>
      <ul className="task-list">{
        filteredTasks.map((task) => (
          <Task
            startTimer={startTimer}
            stopTimer={stopTimer}
            key={task.id}
            label={task.label}
            taskId={task.id}
            onDeleted={onDeleted}
            onChangeCompleted={onChangeCompleted}
            isChecked={task.isCompleted}
            time={task.time}
            isRunning={task.isRunning}
            createTime={task.createTime}
          />))
      }</ul>
    </main>
  )
}

TaskList.defaultProps = {
  label: '',
  onDeleted: () => { },
  onChangeCompleted: () => { },
  isChecked: false,
};

TaskList.propTypes = {
  label: PropTypes.node,
  id: PropTypes.node,
  onDeleted: PropTypes.func,
  onChangeCompleted: PropTypes.func,
  isChecked: PropTypes.bool,
};

export default TaskList;
