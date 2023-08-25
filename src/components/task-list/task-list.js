import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import './task-list.scss';

function TaskList(props) {
  const createFullTasks = () =>
    props.tasks.map((task) => (
      <Task
        key={task.id}
        label={task.label}
        id={task.id}
        onDeleted={props.onDeleted}
        onChangeCompleted={props.onChangeCompleted}
        isChecked={task.isCompleted}
      />
    ));

  return <ul className="task-list">{createFullTasks()}</ul>;
}

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
