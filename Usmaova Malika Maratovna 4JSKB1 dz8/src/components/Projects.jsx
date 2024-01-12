import React from 'react'
import Card from 'react-bootstrap/Card';

export default function projects() {
  return (
    <div>
      <h1>Проектов у меня два</h1>
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Игра на Unity</Card.Title>
        <Card.Text>
          Это 3D игра гонка с полицейской машиной
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Игра на Lua(Roblox)</Card.Title>
        <Card.Text>
          Это шутер стрелялка которою создовала я
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}
