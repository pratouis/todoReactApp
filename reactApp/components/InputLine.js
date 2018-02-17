import React from 'react';

class InputLine extends React.Component {
  constructor(props){
    super(props);

  }
  handleSubmit(e){
    e.preventDefault();
    // debugger;
    this.props.submit('Test Task');
  }
  render() {
    console.log(this.props);
    return( <form onSubmit={(e) => this.handleSubmit(e)} style={{display: 'inline'}}>
      <input className="newTask" type="text"
             placeholder="write task here..."/>
      <input type="submit" value="add" className="completed"/>
    </form>);
    // return(<div style={{display: 'inline'}}>
    //   <input type="text" placeholder="writetask here..."/>
    //   <button onClick={(e)=>this.handleSubmit(e)}>add</button>
    // </div>);
  }
}

export default InputLine;
