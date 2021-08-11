import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CardComponent = ({cardImage, cardTitle, cardDescription, buttonName}) => (
  <Card>
  <Card.Img variant="top" src={cardImage} />
  <Card.Body>
    <Card.Title>{cardTitle}</Card.Title>
    <Card.Text>{cardDescription}</Card.Text>
    <Button variant="primary">{buttonName}</Button>
  </Card.Body>
</Card>
)

export default CardComponent
