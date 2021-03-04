import React from 'react'
import 'css/Swatch.css'
import Channel from 'components/Channel'

const Swatch = ({red=0, green=0, blue=0}) => {

  const bgColor = { 
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  }

  return (
    <li className="swatch" style={bgColor}>
      <Channel rgbVal={red} />
      <Channel rgbVal={green} />
      <Channel rgbVal={blue} />
    </li>
  )
}

export default Swatch