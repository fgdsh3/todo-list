import './tasks-filter.scss';

const TasksFilter = (props) => {
  const { filter, onChangeFilter, onFilter } = props

  const buttons = [
    { name: 'all', label: 'All', isActive: true },
    { name: 'active', label: 'Active', isActive: false },
    { name: 'completed', label: 'Completed', isActive: false },
  ];

  const btns = buttons.map(({ name, label }) => {
    let classBtn = 'task-filter-btn';
    if (name === filter) {
      classBtn += ' active';
    } else classBtn = 'task-filter-btn';
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
}

export default TasksFilter;
