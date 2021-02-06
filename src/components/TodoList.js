import {Component} from 'react'

class TodoList extends Component {
  render(){
    return (
       <li>This is todo list : {this.props.todo.title}</li>
    )
  }
}

export default TodoList;
