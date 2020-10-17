import React, { useState, useEffect } from 'react'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import { Wrapper, Container } from './App.styles'
import LineChart from '../../shared/LineChart'
import ShoppingList from '../ShoppingList'
import productsMock from '../../mocks/productsList.json'
import extractPercentage from '../../utils/extractPercentage'

function App() {

    const colors = ['#62CBC6', '#00ABAD', '#0085BC', '#006073', '#004D61']

    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProduct] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked)
        setSelectedProduct(newSelectedProducts)
    }, [products])

    useEffect(()=>{
        const total =selectedProducts
        .map(product => product.price)
        .reduce((a,b) => a+b, 0)

        setTotalPrice(total)

    }, [selectedProducts])

    function handleToggle(id, checked, name) {
        const newProducts = products.map(product => product.id === id
            ? { ...product, checked: !product.checked }
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
                        onToggle={handleToggle} />}
                middle={
                    <ShoppingList
                        title="Sua lista de compras"
                        products={selectedProducts} />}
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
                    </div>
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App