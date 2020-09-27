import React, { useState } from 'react'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import { Wrapper, Container } from './App.styles'
import Checkbox from '../../shared/Checkbox'

function App (){
    const [lettuce, setLetuce] = useState(true)
    const [rice, setRice] = useState(false)

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
             left={<div>
                 produtos disponiveis:
                 <Checkbox title="Alface" value={lettuce} onClick={() => setLetuce(!lettuce)}/>
                 <Checkbox title="Arroz" value={rice}  onClick={() => setRice(!rice)}/>
             </div>}
             middle={<div>
                 sua lista de compras:
                 <Checkbox title="Arroz" value={rice}  onClick={() => setRice(!rice)}/>
             </div>
             }
             right={<div>
                 estatisticas
             </div>}
            />
        </Container>
        </Wrapper>
}

export default App