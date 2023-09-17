import { useEffect, useState } from "react"
import './timer.scss'

const Timer = (props) => {
  const { time, startTimer, stopTimer, taskId, isRunning } = props
  const [visibleTimeLeft, setVisibleTimeLeft] = useState('');

  useEffect(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = '0' + seconds
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    setVisibleTimeLeft(minutes + ':' + seconds);

    if (time === 0 && isRunning) {
      stopTimer(taskId);
    }
  }, [time, taskId, stopTimer, isRunning]);

  return (
    <div className="timer-box">
      <button className="play-btn" onClick={() => startTimer(taskId)}></button>
      <button className="stop-btn" onClick={() => stopTimer(taskId)}></button>
      <span className="timer">{visibleTimeLeft}</span>
    </div>
  )
}

export default Timer;