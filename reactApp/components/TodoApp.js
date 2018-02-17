import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";
// const dummyData = ['eat a hamburger in Sapporo',
// 'email Cyrus Samii', 'email Teymour', 'email Mary Joe',
// 'mail to Meghann', 'mail to Rebecca' , 'letter to Gretchen',
// 'letter to Alexa (DC)', 'phone to Firouz', 'ask Reema about flights'];
// const myTasks = dummyData.map((task) => {
// 	return {'taskText': task, 'completed': false};
// })

myTasks[4].completed = true;


class TodoApp extends React.Component {
  constructor(props){
    super(props);
    // this.addTo = this.addTo().bind(this)
    this.state = {todos: []}
  }

  componentDidMount(){
		axios.get(dbUrl+'/all')
			.then((res) => this.setState({todos: res.data}))
			.catch((err) => console.log('err in fetching todos', err));
  }

  addTodo(task){
		console.log('task: ', task);
		debugger;
		// axios.defaults.withCredentials = true;
		axios.post(dbUrl+'/add', {task: task})
			.then((res) => this.setState({todos: [...this.state.todos,res.data]}))
			.catch((err) => console.log(err));
    // myTasks.push({'taskText': task, completed: false});
    // this.setState({todos: myTasks});
  }

  toggleTodo(id){
		axios.post(dbUrl+'/toggle')
    let tasks = this.state.todos.slice();
    for(let i=0; i<tasks.length; i++){
      if(tasks[i].taskText === task){
        tasks[i].completed = !tasks[i].completed;
      }
    }
    this.setState({todos: tasks});
  }
  render(){
    return(<div>
      <h3>Persis' Todo App</h3>
      <div className="inputline">
      <InputLine submit={(task) => this.addTodo(task)}/>
      </div>
      <div className="todo">
        <TodoList todos={this.state.todos}
                  completed={(task) => this.toggleTodo(task)}/>
      </div>

    </div>)
  }
}

export default TodoApp;
