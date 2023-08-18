import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';

import NewTaskForm from './new-task-form';

function Header(props) {
  return (
    <header className="header">
      <h1 className="todo-title">Todos</h1>
      <label>
        Todo
        <NewTaskForm placeholder="What needs to be done?" onTaskAdded={props.onTaskAdded} />
      </label>
    </header>
  );
}

Header.propTypes = {
  onTaskAdded: PropTypes.func.isRequired,
};

export default Header;
