import React from 'react';
import './App.css';
import styled from 'styled-components'
import { TaskForm } from './TaskForm';
import { Task } from './Task';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`
const AppContainer = styled.div`
  width: 50%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  background-color: darkblue;
`
const MessagesContainer = styled.div`
  padding: 20px;
`
const TituloH1 = styled.h2`
  color: white;
`

////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tarefas: []
    }
  }

  // ---------- Adiciona a "message" no array tarefas ---------- // 
  addTask = (tarefa) => {
    this.setState({ tarefas: [...this.state.tarefas, tarefa] })
  }

  // ---------- Deleta a "message" do array tarefas ---------- // 
  deleteMessage = (tarefa) => {
    this.setState({ tarefas: this.state.tarefas.filter(task => task !== tarefa) })
  }

  render() {
    return (

      <Wrapper>

        <AppContainer>

          <TaskForm addTask={this.addTask} />

          <MessagesContainer>

            <TituloH1>Tarefas ativas:</TituloH1>

            {
              this.state.tarefas.map(
                (tarefa, index) =>
                  <Task
                    deleteMessage={this.deleteMessage}
                    tarefa={tarefa}
                    key={index}>
                  </Task>
              )
            }
            
          <hr />

          <TituloH1>Tarefas completas:</TituloH1>

          </MessagesContainer>




        </AppContainer>
      </Wrapper>
    );
  }
}

export default App;
