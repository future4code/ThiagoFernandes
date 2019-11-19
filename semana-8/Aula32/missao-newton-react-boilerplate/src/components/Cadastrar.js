/* eslint-disable linebreak-style */
import React from 'react'


export class Cadastrar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}


	render() {
		return (
			<div>
				<div>

					<h1>Nova Tarefa</h1>

					<input
						type="text"
						placeholder="Digite a tarefa..."
					/>
					<button>Cadastrar!</button>
				</div>


			</div>
		);
	}
}