import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import './task-list.scss';

const TaskList = (props) => {
  const { onDeleted, onChangeCompleted, filteredTasks, setTaskList } = props;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTaskList((prevTasks) =>
        prevTasks.map((task) => {
          return task.isRunning ? { ...task, time: task.time - 1 } : task;
        }),
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setTaskList]);

  const startStopTimer = (taskId, startStopString) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, isRunning: startStopString === 'start' }
          : task,
      ),
    );
  };

  return (
    <main className="main">
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <Task
            startStopTimer={startStopTimer}
            key={task.id}
            label={task.label}
            taskId={task.id}
            onDeleted={onDeleted}
            onChangeCompleted={onChangeCompleted}
            isChecked={task.isCompleted}
            time={task.time}
            isRunning={task.isRunning}
            createTime={task.createTime}
          />
        ))}
      </ul>
    </main>
  );
};

TaskList.defaultProps = {
  label: '',
  onDeleted: () => {},
  onChangeCompleted: () => {},
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
