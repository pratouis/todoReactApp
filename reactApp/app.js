import React from 'react';
import {render} from 'react-dom';

const dummyData = ['eat a hamburger in Sapporo',
'email Cyrus Samii', 'email Teymour', 'email Mary Joe',
'mail to Meghann', 'mail to Rebecca' , 'letter to Gretchen',
'letter to Alexa (DC)', 'phone to Firouz', 'ask Reema about flights'];

class Todo extends React.Component {
  render() {
    return ( /*<div style={{display: 'inline'}}>*/
    <li>
    <button onClick={()=>null}>X</button>{this.props.task}
  </li> );
  }
}

class TodoList extends React.Component {
  render() {
    //style={{display: flex, flexDirection: column}}
    return(<ul>
      {dummyData.map((task) => <Todo task={task}/>)}
    </ul>);
  }
}

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
    return( <form onSubmit={(e) => this.handleSubmit(e)} style={{display: inline}}>
      <input type="text"
             onChange={(e)=> this.handleTaskInputChange(e)}
             placeholder="eat portabello burger in Sapporo..."/>
      <input type="submit" value="add"/>
    </form>);
  }
}

class TodoApp extends React.Component {
  render(){
    return(<div>
      <h3>Persis' Todo App</h3>
      <TodoList />
    </div>)
  }
}
render(<TodoApp/>, document.getElementById('root'));
