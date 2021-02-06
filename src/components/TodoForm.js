import {Component} from 'react'

class TodoForm extends Component {
constructor(props) {
  super(props) ;
  this.state = {
    value: 'Blank cause its not change'
  }
}

handleChange = (event) => {
    this.setState({
        value: event.target.value
    })
}

handleSubmit = (event) =>  {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
        <>
        
      <h3>{this.state.value}</h3>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </>
    )
  }
}

export default TodoForm;
