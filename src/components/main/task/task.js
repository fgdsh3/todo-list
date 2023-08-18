import React, { Component } from 'react';

import TaskCreateTime from './task-create-time';
import ClearTask from './clear-task';
import TaskChanger from './task-changer';
import './task.scss';

class Task extends Component {
  state = {
    isChecked: this.props.isChecked,
    editing: false,
    label: this.props.label,
  };

  checkTask = () => {
    this.setState(({ isChecked }) => ({ isChecked: !isChecked }));
  };

  changeTask = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  render() {
    const { id, onDeleted, onChangeCompleted, isChecked } = this.props;

    if (this.state.editing) {
      return (
        <form
          className="task__item"
          onSubmit={(e) => {
            e.preventDefault();
            this.changeTask();
          }}
        >
          <input
            className="edit"
            type="text"
            autoFocus
            defaultValue={this.state.label}
            onChange={(e) => this.setState({ label: e.target.value })}
          />
        </form>
      );
    }

    return (
      <li className="task__item">
        <input
          className="task__item-input"
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={() => {
            this.checkTask();
            onChangeCompleted(id);
          }}
        />
        <label htmlFor={id}>
          <span className="description">{this.state.label}</span>
          <TaskCreateTime />
        </label>
        <TaskChanger onChangeTask={this.changeTask} />
        <ClearTask onDeleted={onDeleted} id={id} />
      </li>
    );
  }
}

export default Task;
