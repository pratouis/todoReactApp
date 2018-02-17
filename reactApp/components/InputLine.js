import React from 'react';

class InputLine extends React.Component {
  constructor(props){
    super(props);
    this.state = {typedText: ""}
  }
  handleSubmit(event){
    event.preventDefault();
    // debugger;
    this.props.submit(this.state.typedText);
    this.setState({typedText: ""});
  }

  handleTyping(event){
    this.setState({typedText: event.target.value});
  }
  render() {
    console.log(this.props);
    return( <form onSubmit={(e) => this.handleSubmit(e)} style={{display: 'inline'}}>
      <input className="newTask" type="text"
             onChange={(e)=>this.handleTyping(e)}
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
