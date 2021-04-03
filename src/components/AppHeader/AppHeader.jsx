import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper } from './AppHeader.styles'

function AppHeader() {
    const result = useSelector(state => state.calculator)
    return <Wrapper>
        <h1>
            alga
            <span>Shopping</span>
            <span>{result}</span>
        </h1>
    </Wrapper>
}

export default AppHeader