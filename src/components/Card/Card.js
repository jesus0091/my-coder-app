import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'

const CardComponent = ({cardImage, cardTitle, cardDescription, buttonName}) => (
  <Card className='cardProduct'>
  <Card.Img  className='col-6' variant="top" src={cardImage} />
  <Card.Body className='col-6' >
    <Card.Title>{cardTitle}</Card.Title>
    <Card.Text>{cardDescription}</Card.Text>
    <ItemCount />
    <Button variant="primary">{buttonName}</Button>
  </Card.Body>
</Card>
)

export default CardComponent
