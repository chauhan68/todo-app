import { Fragment } from 'react'
import styled from 'styled-components'

import ToDoApp from './Components/ToDoApp/ToDoApp'

const Header = styled.h1`
  text-align: center;
  font-family: 'sans-serif';
  text-transform: uppercase;
  font-size: 4rem;
`

const App = () => {
  return (
    <Fragment>
      <Header>
        Todo List
      </Header>
      <ToDoApp />
    </Fragment>
  );
}

export default App;
