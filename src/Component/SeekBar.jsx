import React, { useEffect, useState } from 'react'

function SeekBar(props) {

    const [valueRange, setValueRange]=useState(0)

    let myVal = Math.floor(props.playTime)

 useEffect(()=>{
 setValueRange(myVal)
 },[myVal])
   


  return (
    <div>
    <label htmlFor="range" >Seek Range:</label>
    <input id='range' type='range' value={valueRange}   />
      
    </div>
  )
}

export default SeekBar
