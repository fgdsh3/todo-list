import React, { Component } from 'react';

import './todo-app.scss';
import Header from '../header';
import TaskList from '../main/task-list';
import Footer from '../footer';

class TodoApp extends Component {
  state = {
    taskList: [],
    filter: 'all',
  };

  maxId = 1;

  addTask = (text) => {
    if (text.length === 0) {
      return this.state.taskList;
    }

    return this.setState(({ taskList, filter }) => {
      const newItem = {
        label: text,
        id: this.maxId++,
        isCompleted: false,
      };
      const newArr = [...taskList, newItem];
      this.onFilter(filter);
      return {
        taskList: newArr,
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({ taskList }) => {
      const index = taskList.findIndex((el) => el.id === id);
      const newArr = [...taskList.slice(0, index), ...taskList.slice(index + 1)];

      return { taskList: newArr };
    });
  };

  clearCompleted = () => {
    this.setState(({ taskList }) => {
      const notCompletedArr = taskList.filter((task) => !task.isCompleted);
      return { taskList: notCompletedArr };
    });
  };

  onChangeCompleted = (id) => {
    this.setState(({ taskList }) => {
      const index = taskList.findIndex((el) => el.id === id);

      const oldItem = taskList[index];
      const newItem = { ...oldItem, isCompleted: !oldItem.isCompleted };
      const newArr = [...taskList.slice(0, index), newItem, ...taskList.slice(index + 1)];

      return { taskList: newArr };
    });
  };

  onFilter = (filter) => {
    switch (filter) {
      case 'all':
        return this.state.taskList;
      case 'active':
        return this.state.taskList.filter((item) => !item.isCompleted);
      case 'completed':
        return this.state.taskList.filter((item) => item.isCompleted);
      default:
        return this.state.taskList;
    }
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const filteredTasks = this.onFilter(this.state.filter);

    return (
      <div className="todo-app">
        <Header onTaskAdded={this.addTask} />
        <TaskList onDeleted={this.deleteTask} tasks={filteredTasks} onChangeCompleted={this.onChangeCompleted} />
        <Footer
          filter={this.state.filter}
          tasks={this.state.taskList}
          onFilter={this.onFilter}
          onChangeFilter={this.onChangeFilter}
          tasksLength={this.state.taskList.length}
          onClearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default TodoApp;
