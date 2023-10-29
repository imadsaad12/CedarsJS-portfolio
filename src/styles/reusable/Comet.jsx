import React from 'react'
import { CometImage } from './styles'
import comet from "../../static/space/comet.png"
export default function Comet({left,top}) {
  return (
    <CometImage src={comet} left={left} top={top} />
    )
}
