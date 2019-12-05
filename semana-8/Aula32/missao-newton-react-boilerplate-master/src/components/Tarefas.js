/* eslint-disable linebreak-style */
import React from "react"


export class Tarefas extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}



	render() {
		return (

			<div>

				<h1>Todas as tarefas</h1>

				<ul>
					<li>Tarefa 1</li>
					<li>Tarefa 2</li>
				</ul>

				<button>Completar todas</button>
				<button>Exibir completas</button>
				<button>Exibir ativas</button>

			</div>

		);
	}
}