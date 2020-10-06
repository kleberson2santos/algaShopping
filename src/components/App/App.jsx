import React, { useState } from 'react'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import { Wrapper, Container } from './App.styles'
import LineChart from '../../shared/LineChart'
import ShoppingList from '../ShoppingList'
import productsMock from '../../mocks/productsList.json'
import { useEffect } from 'react'

function App() {

    const colors = ['#62CBC6', '#00ABAD', '#0085BC', '#006073', '#004D61']

    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProduct] = useState([])

    useEffect(()=> {
        const newSelectedProducts = products
        .filter(product=> product.checked)
        setSelectedProduct(newSelectedProducts)
    }, [products])
    
    function handleToggle (id, checked, name) {
        const newProducts = products.map(product => product.id === id 
            ? {...product, checked: !product.checked} 
            : product
           
        )
        setProducts(newProducts)
    }

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={
                    <ShoppingList
                        title="Produtos disponíveis" 
                        products={products}
                        onToggle={handleToggle}/>}
                middle={
                    <ShoppingList
                        title="Sua lista de compras" 
                        products={selectedProducts}/>}
                right={<div>
                    estatisticas:
                 <LineChart title="saudável" color={colors[0]} percentage={80} />
                    <LineChart title="não tão saudável" color={colors[1]} percentage={20} />
                    <LineChart title="limpeza" color={colors[2]} percentage={35} />
                    <LineChart title="outros" color={colors[3]} percentage={20} />
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App