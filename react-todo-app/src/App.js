import React, {Component} from "react";
import './App.css'
export default class App extends Component {
  
  state = {
    todoData : [
      {
        id: '1',
        title: '공부하기',
        completed: true
      },
      {
        id: '2',
        title: '청소하기',
        completed: false
      }
    ],
    value: ''
  }
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: 'none'
    }
  }

  listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? 'line-through' :'none'
    }
  }

  buttonOnClick = (id) => {
    let newTodoData = this.state.todoData.filter(data => data.id !== id);
    this.setState({ todoData: newTodoData});
  }

  handleOnChange = (e) => {
    console.log('e', e.target.value);
    this.setState({ value: e.target.value })
  }

  handleOnClick = (e) => {
    e.preventDefault();
    let newTodoData = [...this.state.todoData, {id: Date.now(), title: this.state.value, completed: false }]
    this.setState({ todoData: newTodoData, value: ''});
  }

  handleToggle = (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }

      return data
    }) 

    this.setState({ todoData: newTodoData  });
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.listStyle(data.completed)} key={data.id}>
              <p>
                <input type='checkbox' defaultChecked={data.completed} onClick={() => this.handleToggle(data.id)}/>
                {data.title}
                <button style={this.btnStyle} onClick={() => this.buttonOnClick(data.id)}>x</button>
              </p>
            </div>
          ))}

          <form style={{display: 'flex', margin: '20px'}} onSubmit={this.handleOnClick}>
            <input
              type="text"
              name="value"
              style={{flex:  '10', padding: '5px'}}
              placeholder="해야  할 일을 입력하자"
              value={this.state.value}
              onChange={this.handleOnChange}
            />
            <input
              type="submit"
              style={{flex:  '1'}}
              className='btn'
              value='입력'
            />
          </form>
        </div>
      </div>
    )
  }
}
