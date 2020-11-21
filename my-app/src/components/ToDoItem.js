import React from 'react'

function ToDoItem (props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.check} onChange={() => props.handleClick(props.item.id)}/>
            <p style={props.item.check === true ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem