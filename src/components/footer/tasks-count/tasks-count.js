import React from 'react';

function TasksCount(props) {
  return <span className="tasks-count">{props.tasksLength} items left</span>;
}

export default TasksCount;
