import React from 'react';
import './clear-tasks.scss';

function ClearTasks(props) {
  return (
    <button className="clear-completed" type="" onClick={props.onClearCompleted}>
      Clear completed
    </button>
  );
}

export default ClearTasks;
