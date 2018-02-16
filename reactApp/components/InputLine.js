import React from 'react';

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

export default InputLine;
