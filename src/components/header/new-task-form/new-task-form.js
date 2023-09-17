import { useState } from 'react';
import './new-task-form.scss';

const NewTaskForm = (props) => {
  const { onTaskAdded, placeholder } = props;

  const [inputValue, setInputValue] = useState('')
  const [minuts, setMinuts] = useState('')
  const [seconds, setSeconds] = useState('')

  const handleSetMinuts = (e) => {
    const value = e.target.value
    if (!isNaN(value)) {
      setMinuts(() => {
        if (value < 60) {
          return value
        }
        else return '';
      })
    }
  }

  const handleSetSeconds = (e) => {
    const value = e.target.value
    if (!isNaN(value)) {
      setSeconds(() => {
        if (value < 60) {
          return value
        }
        else return '';
      })
    }
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && inputValue.length > 0) {
      if (minuts > 0 || seconds > 0) {
        e.preventDefault()
        onTaskAdded(inputValue, minuts, seconds);
        setInputValue('')
        setMinuts('')
        setSeconds('')
      }
    }
  }

  return (
    <form className='new-task-formBox' onSubmit={handleSubmit}>
      <input
        className='new-task-form'
        type='text'
        autoFocus
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleSubmit}
      />
      <input
        className='new-task-form min'
        placeholder='Min'
        value={minuts}
        onChange={handleSetMinuts}
        onKeyDown={handleSubmit} ></input>
      <input
        className='new-task-form sec'
        placeholder='Sec'
        value={seconds}
        onChange={handleSetSeconds}
        onKeyDown={handleSubmit}
      ></input>
    </form >
  );
}

export default NewTaskForm;
