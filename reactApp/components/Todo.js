import React from 'react';

class Todo extends React.Component {
  render() {
    return ( /*<div style={{display: 'inline'}}>*/
    <li className="todoItem">
    <button className="completed" onClick={()=>this.props.completed(this.props.task)}>X</button>
    {this.props.status ?
      <strike>{this.props.task}</strike> :
      this.props.task
    }
  </li> );
  }
}

export default Todo;
