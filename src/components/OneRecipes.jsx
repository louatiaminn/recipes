import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function OneRecipes({element}) {
    const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem' }} key={element.id}>
        <Card.Img variant="top" src={element.image_url} alt={element.name} height="250px" />
        <Card.Body>
            <Card.Title>{element.name}</Card.Title>
            <Card.Text>
                {element.description}
            </Card.Text>
            <Button variant="outline-secondary" onClick={()=>navigate(`/recipedetails/${element.id}`)}>Details</Button>
        </Card.Body>
    </Card>   
  )
}

export default OneRecipes