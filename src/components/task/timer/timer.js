import { useEffect, useState } from 'react';
import './timer.scss';

const Timer = (props) => {
  const { time, startStopTimer, taskId, isRunning } = props;
  const [visibleTimeLeft, setVisibleTimeLeft] = useState('');

  useEffect(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    setVisibleTimeLeft(minutes + ':' + seconds);

    if (time === 0 && isRunning) {
      startStopTimer(taskId, 'stop');
    }
  }, [time, taskId, startStopTimer, isRunning]);

  return (
    <div className="timer-box">
      <button
        className="play-btn"
        onClick={() => startStopTimer(taskId, 'start')}
      ></button>
      <button
        className="stop-btn"
        onClick={() => startStopTimer(taskId, 'stop')}
      ></button>
      <span className="timer">{visibleTimeLeft}</span>
    </div>
  );
};

export default Timer;
