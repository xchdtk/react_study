import React from "react"

export default function Lists({ todoData, setTodoData }) {

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  const listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? 'line-through' :'none'
    }
  }

  const handleToggle = (id) => {
    let newTodoData = todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }

      return data
    }) 

    setTodoData(newTodoData);
  }

  const buttonOnClick = (id) => {
    let newTodoData =todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  }

  return (
    <div>
      {todoData.map((data) => (
      <div style={listStyle(data.completed)} key={data.id}>
        <p>
          <input type='checkbox' defaultChecked={data.completed} onClick={() => handleToggle(data.id)}/>
          {data.title}
          <button style={btnStyle} onClick={() => buttonOnClick(data.id)}>x</button>
        </p>
      </div>
    ))}
    </div>
  )
}