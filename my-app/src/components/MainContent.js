import React from 'react'
import ToDoItem from './ToDoItem'

function MainContent() {
    return(
        <div className="todo-list">
            {/* render checkboxes here  */}
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </div>
    )
}

export default MainContent