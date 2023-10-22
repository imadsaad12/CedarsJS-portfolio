import React from 'react'
import { Container,Card,Image ,Profile,Name,Family} from './styles'
import bac1 from "./bac1.jpg"
import per from "./per.png"

export default function SliderItem({ index, currentIndex, member, teamMembers }) {

  return (
    <Container index={index} currentIndex={currentIndex} >
            <Card>
                    {/* <Image src={bac1}/> */}

            </Card>
            <Profile src ={per}/>
            <Name>IMAD</Name>
            <Family>SAAD</Family>
    </Container>
  )
}
