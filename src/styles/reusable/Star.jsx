import React from 'react'
import { StarImage } from './styles'
import star from "../../static/space/star.png"
export default function Star({left,top,blur}) {
  return (
    <StarImage src={star} styles={{left:left,top:top,blur:blur}} />
    )
}
