import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {

  state = {
    text: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    })
    this.setState({
      text: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="text" className="form-control add-todo" placeholder="Add todo..." onChange={this.handleChange} value={this.state.text}/>
      </form>
    );


  }

}