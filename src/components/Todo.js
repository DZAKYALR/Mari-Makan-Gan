import {Component} from 'react'
import TodoList from './TodoList'


class Todo extends Component {
constructor(props) {
  super(props) ;
  this.state = {
    todos: [
        {
            id: 1,
            title: 'Makan'
        },
        {
            id: 2,
            title: 'Minum'
        },
        {
            id: 3,
            title: 'Tidur'
        },
    ]
  }
}

addTodo = () => {

}


  render(){
    return (
        <>
        <hr></hr>
        <ul>
            {
                this.state.todos.map(todo => <TodoList key={todo.id} todo={todo}/>)
            }
        </ul>
      </>
    )
  }
}

export default Todo;
