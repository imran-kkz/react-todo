import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo() {
  return(
  <div>
  <h1>Imran</h1>
  <p>I'm learning React!</p>
  <ul>
    <li>India</li>
    <li>Miami</li>
    <li>New York</li>
  </ul>
  </div>
  )
}

ReactDOM.render(
  <MyInfo/>, document.getElementById("root")
)