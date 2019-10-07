import React, { Component } from 'react'

export class TodoItems extends Component {

  createTasks = item => {

    return (
        
      // O deleteItem pega a key do item em questão, que teoricamente vai ser única
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  render() {

    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
