import React, {Component} from 'react'
import ToDoItem from './ToDoItem'
import todoData from './todoData'
import "./styles.css"

class App extends Component {
constructor() {
    super()
    this.state = todoData.map(item=> <ToDoItem key={item.id} text={item.text} check={item.completed}/>)
}
render(){
    // const todoList = todoData.map(item=> <ToDoItem key={item.id} text={item.text} check={item.completed}/>)
    return(
        <div className="todo-list">
            {this.state}
            {/* {todoList} */}
        </div>
        )
    }
}
export default App