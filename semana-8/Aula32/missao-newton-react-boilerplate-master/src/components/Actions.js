/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */


export const addTarefa = text => (
	{ type: ADD_TAREFA, text }
	)

export const deleteTarefa = id => (
	{ type: DELETE_TAREFA, id }
	)

export const editTarefa = (id, text) => (
	{ type: EDIT_TAREFA, id, text }
	)

export const completeTarefa = id => (
	{ type: COMPLETE_TAREFA, id }
	)
