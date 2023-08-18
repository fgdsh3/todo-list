import React, { Component } from 'react';
import './tasks-filter.scss';

class TasksFilter extends Component {
  buttons = [
    { name: 'all', label: 'All', isActive: true },
    { name: 'active', label: 'Active', isActive: false },
    { name: 'completed', label: 'Completed', isActive: false },
  ];

  render() {
    const btns = this.buttons.map(({ name, label }) => {
      let classBtn = 'task-filter-btn';
      if (name === this.props.filter) {
        classBtn += ' active';
      } else classBtn = 'task-filter-btn';
      return (
        <li key={name}>
          <button
            className={classBtn}
            type="button"
            onClick={() => {
              this.props.onChangeFilter(name);
              this.props.onFilter(name);
            }}
          >
            {label}
          </button>
        </li>
      );
    });

    return <ul className="task-filter">{btns}</ul>;
  }
}

export default TasksFilter;
