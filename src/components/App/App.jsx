import React from 'react'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import { Wrapper, Container } from './App.styles'

function App (){
    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
             left={<div style={{backgroundColor: 'red'}}>
                 produtos disponiveis
             </div>}
             middle={<div style={{backgroundColor: 'green'}}>
                 sua lista de compras
             </div>
             }
             right={<div style={{backgroundColor: 'blue'}}>
                 estatisticas
             </div>}
            />
        </Container>
        </Wrapper>
}

export default App