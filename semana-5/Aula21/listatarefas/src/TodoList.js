import React, { Component } from 'react'

export class TodoList extends Component {

    // Foca no input box pra continuar enviando tarefas após o submit
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return (

            <div className="todoListMain">

                <div className="header">


                    <form onSubmit={this.props.addItem}>

                        <input
                            placeholder="O que vamos fazer?"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />

                        <button type="submit"> Adicionar </button>

                    </form>

                </div>

            </div>
        )
    }
}

export default TodoList
