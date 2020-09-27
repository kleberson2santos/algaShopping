import React, { useEffect, useState } from 'react'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import { Wrapper, Container } from './App.styles'
import Checkbox from '../../shared/Checkbox'
import LineChart from '../../shared/LineChart'

function App (){
    const [lettuce, setLetuce] = useState(true)
    const [rice, setRice] = useState(false)

    const colors = ['#62CBC6', '#00ABAD', '#0085BC', '#006073', '#004D61'];

    // useEffect(() => {
    //     setTimeout(()=>{
    //         setHealthy(80);
    //     }, 5000)
    // }, [])

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
                 estatisticas:
                 <LineChart title="saudável" color={colors[0]} percentage={80}/>
                 <LineChart title="não tão saudável" color={colors[1]} percentage={20}/>
                 <LineChart title="limpeza" color={colors[2]} percentage={35}/>
                 <LineChart title="outros" color={colors[3]} percentage={20}/>
             </div>}
            />
        </Container>
        </Wrapper>
}

export default App