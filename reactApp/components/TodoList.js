import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {


  render() {
    return(<ul>
      {this.props.todos.map((task, index) =>
        <Todo key={task.id} task={task.task}
          status={task.completed}
          completed={this.props.completed}/>)}
    </ul>);
  }
}

export default TodoList;
