import React from 'react';

function ClearTask(props) {
  return <button className="icon icon-destroy" onClick={() => props.onDeleted(props.taskId)} />;
}

export default ClearTask;
