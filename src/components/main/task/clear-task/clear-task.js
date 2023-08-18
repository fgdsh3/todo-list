import React from 'react';

function ClearTask(props) {
  return <button className="icon icon-destroy" onClick={() => props.onDeleted(props.id)} />;
}

export default ClearTask;
