/* eslint-disable linebreak-style */
import React from 'react'
import { Cadastrar } from './Cadastrar'
import { Tarefas } from './Tarefas'
import { Footer } from './Footer'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>

			<Cadastrar />
			<Footer />

			<hr />

			<Tarefas />
			
		</div>
	}
}