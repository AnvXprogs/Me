import React from 'react'
import Card from 'react-bootstrap/Card';
export default function How() {
  return (
    <div>
      <h1>Я умею писать на </h1>
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>C#</Card.Title>
        <Card.Text>
          1998—2001
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Lua</Card.Title>
        <Card.Text>
            1993
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>HTML</Card.Title>
        <Card.Text>
            1986—1991
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}
