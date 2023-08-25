import React, { Component } from 'react';
import './new-task-form.scss';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  updateValue(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { onTaskAdded } = this.props;

    return (
      <input
        className="new-task-form"
        type="text"
        defaultValue=""
        autoFocus
        placeholder={this.props.placeholder}
        onChange={(e) => {
          this.updateValue(e);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onTaskAdded(this.state.inputValue);
            e.target.value = '';
            this.setState({ inputValue: '' })
          }
        }}
      />
    );
  }
}

export default NewTaskForm;
