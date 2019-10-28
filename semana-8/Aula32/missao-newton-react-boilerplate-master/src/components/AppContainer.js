import React from 'react'
import { Cadastrar } from './Cadastrar'
import { Tarefas } from './Tarefas'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>

			<Cadastrar />

			<hr />

			<Tarefas />
			
		</div>
	}
}