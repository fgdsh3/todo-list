import './tasks-filter.scss';
import classNames from 'classnames';

const TasksFilter = (props) => {
  const { filter, onChangeFilter, onFilter } = props;

  const buttons = [
    { name: 'all', label: 'All', isActive: true },
    { name: 'active', label: 'Active', isActive: false },
    { name: 'completed', label: 'Completed', isActive: false },
  ];

  const btns = buttons.map(({ name, label }) => {
    const classBtn = classNames({
      'task-filter-btn': true,
      ' active': name === filter,
    });
    return (
      <li key={name}>
        <button
          className={classBtn}
          type="button"
          onClick={() => {
            onChangeFilter(name);
            onFilter(name);
          }}
        >
          {label}
        </button>
      </li>
    );
  });

  return <ul className="task-filter">{btns}</ul>;
};

export default TasksFilter;
