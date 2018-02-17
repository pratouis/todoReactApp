import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

const dummyData = ['eat a hamburger in Sapporo',
'email Cyrus Samii', 'email Teymour', 'email Mary Joe',
'mail to Meghann', 'mail to Rebecca' , 'letter to Gretchen',
'letter to Alexa (DC)', 'phone to Firouz', 'ask Reema about flights'];
const myTasks = dummyData.map((task) => {
	return {'taskText': task, 'completed': false};
})

myTasks[4].completed = true;


class TodoApp extends React.Component {
  constructor(props){
    super(props);
    // this.addTo = this.addTo().bind(this)
    this.state = {todos: []}
  }

  componentDidMount(){
    this.setState({todos: myTasks});
  }

  addTodo(task){
    myTasks.push({'taskText': task, completed: false});
    this.setState({todos: myTasks});
  }

  render(){
    return(<div>
      <h3>Persis' Todo App</h3>
      <div className="inputline">
      <InputLine submit={(task) => this.addTodo(task)}/>
      </div>
      <div className="todo">
        <TodoList todos={this.state.todos}/>
      </div>

    </div>)
  }
}

export default TodoApp;
