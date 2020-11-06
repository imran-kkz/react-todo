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
}
render(){
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />)
    return(
        <div className="todo-list">
            {todoItems}
        </div>
        )
    }
}
export default App