import React, { Component } from 'react';
import './task-changer.scss';

class TaskChanger extends Component {
  state = {
    inputValue: '',
  };

  render() {
    return <button className="icon icon-edit" type="button" onClick={this.props.onChangeTask} />;
  }
}

export default TaskChanger;
