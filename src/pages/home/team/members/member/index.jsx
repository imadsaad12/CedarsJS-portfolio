import React from 'react'
import hadi from "../../../../../static/hadi.jpg"
import { Container,Image ,ImageWrapper,Layer} from './styles'
export default function Member() {
  return (
    <Container>
        {/* <Layer/> */}
        <ImageWrapper>
        <Image src={hadi}/>
        </ImageWrapper>
    </Container>
  )
}
