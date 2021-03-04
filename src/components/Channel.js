import React from 'react'
import 'css/Channel.css'

const Channel = ({ rgbVal = 0, updateChannel }) => {

  const handleChange = (event) => {
    updateChannel(parseInt(event.target.value))
  }

  const updateRgb = (step) => {
    if (rgbVal + step > 255) {
      updateChannel(255)
    } else if (rgbVal + step < 0) {
      updateChannel(0)
    } else {
      updateChannel(rgbVal + step)
    }
  }

  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={(event) => { updateRgb(1) }}>+</button>
      <input type="text" className="txt" value={rgbVal} onChange={handleChange} />
      <button type="button" className="btn down" onClick={(event) => { updateRgb(-1) }}>-</button>
    </div>
  )
}

export default Channel
