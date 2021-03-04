import React from 'react'
import 'css/Channel.css'

const Channel = ({rgbVal=0}) => {
  return (
    <div className="channel">
      <button type="button" className="btn up">+</button>
      <input type="text" className="txt" value={rgbVal} />
      <button type="button" className="btn down">-</button>
    </div>
  )
}

export default Channel
