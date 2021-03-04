import React, {useState} from 'react'
import 'css/Swatch.css'
import Channel from 'components/Channel'

const Swatch = ({red=0, green=0, blue=0}) => {

  const [r, setR] = useState(red)
  const [g, setG] = useState(green)
  const [b, setB] = useState(blue)

  const bgColor = { 
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  return (
    <li className="swatch" style={bgColor}>
      <Channel rgbVal={r} updateChannel={setR} min={0} />
      <Channel rgbVal={g} updateChannel={setG} />
      <Channel rgbVal={b} updateChannel={setB} />
    </li>
  )
}

export default Swatch