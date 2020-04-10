import React from 'react';

import Chat from './pages/Chat'
import GlobalStyle from './styles/global'
import {Container} from './styles/styles'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Chat />
    </Container>
  );
}

export default App;
