import './task-changer.scss';

const TaskChanger = (props) => {
  const { onChangeTask } = props

  return <button className="icon icon-edit" type="button" onClick={onChangeTask} />;
}

export default TaskChanger;
