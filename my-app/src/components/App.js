import React from 'react'
import ToDoItem from './ToDoItem'
import todoData from './todoData'
import "./styles.css"

class App extends React.Component {
constructor() {
    super()
    this.state = {
        todos: todoData
    }
    this.handleClick = this.handleClick.bind(this)
}

handleClick(id) {
    console.log('test' + id)
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                todo.check = !todo.check
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
}

render(){
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleClick={this.handleClick} />)

    return(
        <div className="todo-list">
            {todoItems}
        </div>
        )
    }
}
export default App