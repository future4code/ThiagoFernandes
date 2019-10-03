import React from 'react';
import { Post } from './Post';
import styled from 'styled-components';

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
function App() {


  return (
    <MainArea>

      <Post
        image={"https://picsum.photos/500/400"}
        profilePicture={"https://imgur.com/a/6gypHCG"}
        username={"future4.br"}
      />


    </MainArea>
  );
}

export default App;
