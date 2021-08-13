import React from 'react'
import './ItemListContainer.css'
import { Container, } from 'react-bootstrap'

const ItemListContainer = ({greeting}) => {
    return (
        
        <Container fluid className='greeting'>
        <div className='container greetingCard'>
            <p className='greetingText'>{greeting}</p>
            <span className='greetingSubText'> {greeting} </span>
        </div>
        </Container>
        
    )
}

export default ItemListContainer
