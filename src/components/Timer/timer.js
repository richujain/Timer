import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { timerActions } from "../../store/timer";
import classes from "./Timer.module.css";
export default function Timer() {
  const dispatch = useDispatch();
  const hour = useSelector((state) => state.hour);
  const minute = useSelector((state) => state.minute);
  const second = useSelector((state) => state.second);
  const active = useSelector((state) => state.active);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       dispatch(timerActions.decrementSecond());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
  const startHandler = () => {
    
  };

  const incrementHourHandler = () => {
    dispatch(timerActions.incrementHour());
  };
  const decrementHourHandler = () => {
    dispatch(timerActions.decrementHour())
  }
  const incrementMinuteHandler = () => {
    dispatch(timerActions.incrementMinute())
  }
  const increaseMinuteHandler = () => {
    dispatch(timerActions.increaseMinute(5));
  };
  const decrementMinuteHandler = () => {
    dispatch(timerActions.decrementMinute())
  }
  const resetHandler = () => {
    dispatch(timerActions.resetTimer())
  }

  return (
    <div className={classes.div}>
      <div className={classes.value}>
        {("0" + hour).slice(-2)}:{("0" + minute).slice(-2)}:
        {("0" + second).slice(-2)}
      </div>

      <button
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
        onClick={startHandler}
      >
        START
      </button>
      <button
        onClick={resetHandler}
        style={{ backgroundColor: "#BB86FC" }}
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
      >
        RESET
      </button>
      <button
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
        onClick={increaseMinuteHandler}
      >
        + 5 Minutes
      </button>
      <button
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
        onClick={incrementMinuteHandler}
      >
        + Minute
      </button>
      <button
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
        onClick={decrementMinuteHandler}
      >
        - Minute
      </button>
      <button
        onClick={incrementHourHandler}
        style={{ backgroundColor: "#BB86FC" }}
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
      >
        + Hour
      </button>
      <button
        onClick={decrementHourHandler}
        style={{ backgroundColor: "#BB86FC" }}
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
      >
        - Hour
      </button>

      {/* <button className={`${classes.button} ${classes.buttonCircle}`}>
        50
        </button> */}
    </div>
  );
}
