import React from 'react';
import { withAuthorization } from '../Session';
import { Wrapper, VideosWrapper, HomePageWrapper } from './styled'

const HomePage = () => (
    <HomePageWrapper>
        <Wrapper>
            <h1>Vídeos em destaque</h1>
            <p>~em construção~</p>
        </Wrapper>
        <VideosWrapper>Criar e inserir componentes de video aqui</VideosWrapper>
    </HomePageWrapper>

);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);