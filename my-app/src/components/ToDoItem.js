import React from 'react'

function ToDoItem (props){
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.check} onChange={() => console.log("button changed!")}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem