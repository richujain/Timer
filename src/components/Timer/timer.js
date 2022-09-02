import React, { useState } from 'react'
import classes from './Timer.module.css'
export default function Timer() {
    const [timer, setTimer] = useState()
    
  return (
    <div className={classes.div}>
        <button className={`${classes.button} ${classes.buttonCircle}`}>
        50
        </button>
        <button className={`${classes.button} ${classes.buttonRoundedCorner}`}>
        START
        </button>
        <button style={{ backgroundColor: '#BB86FC' }} className={`${classes.button} ${classes.buttonRoundedCorner}`}>
        START
        </button>

        
    </div>
  )
}
