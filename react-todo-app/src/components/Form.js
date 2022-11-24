import React, { Component } from 'react'

export default function Form({todoData, setTodoData, value, setValue}) {

  const handleOnChange = (e) => {
    setValue(e.target.value);
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    let newTodoData = [...todoData, {id: Date.now(), title: value, completed: false }]
    setTodoData(newTodoData);
    setValue('');
  }

  return (
    <div>
      <form style={{display: 'flex', margin: '20px'}} onSubmit={handleOnClick}>
          <input
            type="text"
            name="value"
            style={{flex:  '10', padding: '5px'}}
            placeholder="해야  할 일을 입력하자"
            value={value}
            onChange={handleOnChange}
          />
          <input
            type="submit"
            style={{flex:  '1'}}
            className='btn'
            value='입력'
          />
        </form>
    </div>
  )
}