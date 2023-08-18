import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task-create-time.scss';

class TaskCreateTime extends Component {
  state = {
    elapsedTime: 'now',
  };

  createDate = new Date();

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(() => ({
        elapsedTime: formatDistanceToNow(this.createDate, {
          includeSeconds: true,
          addSuffix: true,
        }),
      }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <span className="created">{this.state.elapsedTime}</span>;
  }
}

export default TaskCreateTime;
