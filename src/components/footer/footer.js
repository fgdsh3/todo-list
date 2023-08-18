import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';
import TasksFilter from './tasks-filter';
import ClearTasks from './clear-tasks';
import TasksCount from './tasks-count';

function Footer(props) {
  const { filter, tasks, onFilter, onChangeFilter, tasksLength, onClearCompleted } = props;

  return (
    <footer className="footer">
      <TasksCount tasksLength={tasksLength} />
      <TasksFilter filter={filter} tasks={tasks} onFilter={onFilter} onChangeFilter={onChangeFilter} />
      <ClearTasks onClearCompleted={onClearCompleted} />
    </footer>
  );
}

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  tasksLength: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
