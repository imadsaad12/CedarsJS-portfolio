import React from 'react'
import { StarsImage } from './styles'
import stars from "../../static/space/stars.png"

export default function Stars({left,top,right,bottom,width,height}) {
  return (
    <StarsImage src={stars} styles={{left:left,top:top,right:right,bottom:bottom,width:width,height:height}} />
    )
}
