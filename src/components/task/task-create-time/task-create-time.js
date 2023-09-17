/* import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task-create-time.scss';

const TaskCreateTime = (props) => {
  const { modifiedTask, createTime } = props;

  const [elapsedTime, setElapsedTime] = useState('now');
  const [intervalId, setIntervalId] = useState();


  useEffect(() => {
    if (modifiedTask && elapsedTime === 'now') {
      setElapsedTime('modified now')
    }
    clearInterval(intervalId);
    const interval = setInterval(() => {
      setElapsedTime(() => {
        let DistancetoNow = formatDistanceToNow(createTime, {
          includeSeconds: true,
          addSuffix: true,
        });
        if (modifiedTask) {
          DistancetoNow = 'modified ' + DistancetoNow
        }
        return DistancetoNow
      });
    }, 5000);
    setIntervalId(interval);
  }, [elapsedTime]);

  return <span className="created">{elapsedTime}</span>;
};

export default TaskCreateTime; */

import { useEffect, useState, useRef } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task-create-time.scss';

const TaskCreateTime = (props) => {
  const { createTime } = props;

  const [elapsedTime, setElapsedTime] = useState('now');
  const [intervalId, setIntervalId] = useState();
  const createTimeRef = useRef(createTime);

  useEffect(() => {
    const changeElapsedTime = () => {
      setElapsedTime(() => {
        let distanceToNow = formatDistanceToNow(createTimeRef.current, {
          includeSeconds: true,
          addSuffix: true,
        });
        return distanceToNow;
      });
    }
    changeElapsedTime()
    clearInterval(intervalId);
    const interval = setInterval(() => {
      changeElapsedTime()
    }, 5000);
    setIntervalId(interval);
  }, [elapsedTime]);

  return <span className="created">{elapsedTime}</span>;
};

export default TaskCreateTime;