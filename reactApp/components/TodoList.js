import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {


  render() {
    return(<ul>
      {this.props.todos.map((task) =>
        <Todo task={task.taskText}
          status={task.completed}
          completed={this.props.completed}/>)}
    </ul>);
  }
}

export default TodoList;
