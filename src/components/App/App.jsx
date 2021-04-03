import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wrapper, Container } from './App.styles'

import LineChart from '../../shared/LineChart'
import extractPercentage from '../../utils/extractPercentage'

import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import ShoppingList from '../ShoppingList'
import Calculator from '../Calculator'

import {
    selectSelectedProducts,
    selectSelectedProductsTotalPrice
} from '../../store/Products/Products.selectors'
import { toggleProduct } from '../../store/Products/Products.actions'

function App() {
    const dispatch = useDispatch()
    const colors = ['#62CBC6', '#00ABAD', '#0085BC', '#006073', '#004D61']

    const selectedProducts = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(selectSelectedProductsTotalPrice)

    function handleToggle(id) {
        dispatch(toggleProduct(id))
    }

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={
                    <ShoppingList
                        title="Produtos disponíveis"
                        onToggle={handleToggle} />}
                middle={
                    <ShoppingList
                        title="Sua lista de compras"
                        displayOnlySelected
                        onToggle={handleToggle} />}
                right={<div>
                    estatisticas:
                    <LineChart 
                     title="saudável" 
                     color={colors[0]} 
                     percentage={extractPercentage(
                         selectedProducts.length,
                         selectedProducts.filter(product=>product.tags.includes('healthy'))
                         .length)} />
                    <LineChart 
                     title="não tão saudável" 
                     color={colors[1]}
                     percentage={extractPercentage(
                         selectedProducts.length,
                         selectedProducts.filter(product=>product.tags.includes('junk'))
                         .length)} />
                    <LineChart 
                     title="limpeza" 
                     color={colors[2]} 
                     percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts.filter(product=>product.tags.includes('cleaning'))
                        .length)} />
                    <LineChart 
                     title="outros" 
                     color={colors[3]} 
                     percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts.filter(product=>product.tags.includes('others'))
                        .length)} />

                    <div style={{ marginTop: 12}}>
                        <h2 style={{ fontWeight:400, fontSize: 12, color:'#00364A' }}>
                            previsão de gastos:
                        </h2>
                        <div style={{ fontSize: 24 }}>
                            {totalPrice.toLocaleString('pt-br', {
                                minimumFractionDigits: 2,
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </div>
                        <Calculator/>
                    </div>
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App