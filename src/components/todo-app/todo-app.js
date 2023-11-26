import { useState } from 'react';

import './todo-app.scss';
import Header from '../header';
import TaskList from '../task-list';
import Footer from '../footer';

const all = 'all';
const completed = 'completed';
const active = 'active';

const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState(all);
  const [maxId, setMaxId] = useState(1);

  const addTask = (label, minutes, seconds) => {
    label = label.trim();
    if (label.length === 0) {
      return taskList;
    }

    setMaxId(maxId + 1);
    setTaskList(() => {
      const newItem = {
        label: label,
        id: maxId,
        isCompleted: false,
        time: Number(Math.floor(minutes * 60)) + Number(seconds),
        isRunning: false,
        createTime: new Date(),
      };
      const newArr = [...taskList, newItem];
      onFilter(filter);
      return newArr;
    });
  };

  const deleteTask = (id) => {
    setTaskList(() => {
      const index = taskList.findIndex((el) => el.id === id);
      const newArr = [
        ...taskList.slice(0, index),
        ...taskList.slice(index + 1),
      ];

      return newArr;
    });
  };

  const clearCompleted = () => {
    setTaskList(() => {
      const notCompletedArr = taskList.filter((task) => !task.isCompleted);
      return notCompletedArr;
    });
  };

  const onChangeCompleted = (id) => {
    setTaskList(() => {
      const index = taskList.findIndex((el) => el.id === id);

      const oldItem = taskList[index];
      const newItem = { ...oldItem, isCompleted: !oldItem.isCompleted };
      const newArr = [
        ...taskList.slice(0, index),
        newItem,
        ...taskList.slice(index + 1),
      ];

      return newArr;
    });
  };

  const onFilter = (filter) => {
    switch (filter) {
      case all:
        return taskList;
      case active:
        return taskList.filter((item) => !item.isCompleted);
      case completed:
        return taskList.filter((item) => item.isCompleted);
      default:
        return taskList;
    }
  };

  const onChangeFilter = (filter) => {
    setFilter(filter);
  };

  const filteredTasks = onFilter(filter);

  return (
    <div className="todo-app">
      <Header onTaskAdded={addTask} />
      <TaskList
        onDeleted={deleteTask}
        onFilter={onFilter}
        filteredTasks={filteredTasks}
        onChangeCompleted={onChangeCompleted}
        setTaskList={setTaskList(taskList)}
      />
      <Footer
        filter={filter}
        tasks={taskList}
        onFilter={onFilter}
        onChangeFilter={onChangeFilter}
        tasksLength={taskList.length}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};

export default TodoApp;
