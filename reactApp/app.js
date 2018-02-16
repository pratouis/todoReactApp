import React from 'react';
import {render} from 'react-dom';

const dummyData = ['eat a hamburger in Sapporo',
'email Cyrus Samii', 'email Teymour', 'email Mary Joe',
'mail to Meghann', 'mail to Rebecca' , 'letter to Gretchen',
'letter to Alexa (DC)', 'phone to Firouz', 'ask Reema about flights'];
const myTasks = dummyData.map((task) => {
	return {'taskText': task, 'completed': false};
})

myTasks[4].completed = true;

class InputLine extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newTask: ""
    }
  }

  handleTaskInputChange(e){
    this.setState({newTask: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('some stuff about e.target: ', e.target);
  }

  render() {
    return( <form onSubmit={(e) => this.handleSubmit(e)} style={{display: 'inline'}}>
      <input className="newTask" type="text"
             onChange={(e)=> this.handleTaskInputChange(e)}
             placeholder="write task here..."/>
      <input type="submit" value="add" className="completed"/>
    </form>);
  }
}

class Todo extends React.Component {
  render() {
    return ( /*<div style={{display: 'inline'}}>*/
    <li className="todoItem">
    <button className="completed" onClick={()=>null}>X</button>
    {this.props.completed ?
      <strike>this.props.task</strike> :
      this.props.task
    }
  </li> );
  }
}

class TodoList extends React.Component {
  render() {
    return(<ul>
      {this.props.todos.map((task) => <Todo task={task.taskText} completed={task.completed}/>)}
    </ul>);
  }
}


class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {todos: []}
  }

  componentDidMount(){
    this.setState({todos: myTasks});
  }

  render(){
    return(<div>
      <h3>Persis' Todo App</h3>
      <div className="inputline">
      <InputLine/>
      </div>
      <div className="todo">
        <TodoList todos={this.state.todos}/>
      </div>

    </div>)
  }
}
render(<TodoApp/>, document.getElementById('root'));
