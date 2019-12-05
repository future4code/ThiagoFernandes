import React from 'react'
import { useReduxState, Provider, useDispatch } from "../redux/react-redux-f4";
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