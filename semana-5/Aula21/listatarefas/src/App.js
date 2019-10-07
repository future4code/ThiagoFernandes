import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        status: "",
      },
    }
  }

  // Deletar o item de acordo com a key passada - ok

  // A ideia é mudar isso aqui pra um map (?), daí todo item deletado ganha o status OFF e todo item ativo ganha status ON
  // Ao clicar, muda esse status de ON pra OFF
  // Os itens ON são mostrados na toDo list e os itens OFF são monstrados na lista de tarefas concluídas
  // Obviamente ainda não sei fazer, mas a ideia faz sentido, haha
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })

    this.setState(
      {
      items: filteredItems,
      }
    )
  }


  // Salva o valor do input + uma maneira legal de lidar com a key ensinado pelo stackoverflow :)
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now(), status: "on" }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: "", key: "" },
      })
    }
  }


  // Evitar que a página recarregue + só adicionar tarefa se o input não for vazio + esvaziar input depois de enviar
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem

    if (newItem.text !== '') {

      const items = [...this.state.items, newItem]
      console.log(items)

      this.setState(
        {
        items: items,
        currentItem: { text: "", key: "", status: "" },
        }
      )

    }
  }

  render() {

    return (

      <div className="App">

        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />

        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />

      </div>
    )
  }
}

export default App
