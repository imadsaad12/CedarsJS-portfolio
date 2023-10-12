import React from 'react'
import { Container,Header,Number ,Title,Line} from './styles'
import Project from './project'

export default function Work() {
  return (
    <Container>
        <Header>
            <Number>III.</Number>
            <Title>Some Things We’ve Built</Title>
            <Line></Line>

        </Header>
        <Project/>
        
    </Container>
  )
}
