import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { timerActions } from "../../store/timer";
import classes from "./Timer.module.css";
export default function Timer(props) {
  const dispatch = useDispatch();
  const hour = useSelector((state) => state.hour);
  const minute = useSelector((state) => state.minute);
  const second = useSelector((state) => state.second);
  let active = useSelector((state) => state.active);

  let blackToWhite = props.light ? { color: "black" } : { color: "white" };

  useEffect(() => {
    if (active) {
      if (second > 0 || minute > 0 || hour > 0) {
        var interval = setInterval(() => {
          if (second > 0) {
            dispatch(timerActions.decrementSecond());
          } else if (second === 0 && minute > 0) {
            dispatch(timerActions.setSecond(59));
            dispatch(timerActions.decrementMinute());
          } else if (second === 0 && minute === 0 && hour > 0) {
            dispatch(timerActions.setSecond(59));
            dispatch(timerActions.setMinute(59));
            dispatch(timerActions.decrementHour());
          }
        }, 1000);
      } else {
        dispatch(timerActions.timerActive(!active));
        alert("Time is up!");
      }
    }
    return () => clearInterval(interval);
  }, [active, second, minute, hour, dispatch]);

  const startHandler = () => {
    dispatch(timerActions.timerActive(!active));
  };

  const incrementHourHandler = () => {
    dispatch(timerActions.incrementHour());
  };
  const decrementHourHandler = () => {
    if (hour > 0) {
      dispatch(timerActions.decrementHour());
    }
  };
  const incrementMinuteHandler = () => {
    if (minute > 58) {
      dispatch(timerActions.incrementHour());
      dispatch(timerActions.setMinute(0));
    } else {
      dispatch(timerActions.incrementMinute());
    }
  };
  const increaseMinuteHandler = () => {
    dispatch(timerActions.increaseMinute(5));
  };
  const decrementMinuteHandler = () => {
    if (minute > 0) {
      dispatch(timerActions.decrementMinute());
    } else if (hour > 0) {
      dispatch(timerActions.decrementHour());
      dispatch(timerActions.setMinute(59));
    }
  };
  const resetHandler = () => {
    dispatch(timerActions.timerActive(false));
    dispatch(timerActions.timerActive(false));
    dispatch(timerActions.resetTimer());
  };

  return (
    <div className={classes.div}>
      <div className={classes.value}>
        <h1 style={blackToWhite}>
          {("0" + hour).slice(-2)}:{("0" + minute).slice(-2)}:
          {("0" + second).slice(-2)}
        </h1>
      </div>

      <button
        style={blackToWhite}
        onClick={incrementHourHandler}
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
      >
        <h3>+H</h3>
      </button>
      <button
        style={blackToWhite}
        onClick={decrementHourHandler}
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
      >
        <h3>-H</h3>
      </button>
      <button
        style={blackToWhite}
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
        onClick={increaseMinuteHandler}
      >
        <h3>+5M</h3>
      </button>
      <button
        style={blackToWhite}
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
        onClick={incrementMinuteHandler}
      >
        <h3>+M</h3>
      </button>
      <button
        style={blackToWhite}
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
        onClick={decrementMinuteHandler}
      >
        <h3>-M</h3>
      </button>
      <button
        style={blackToWhite}
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
        onClick={startHandler}
      >
        <h3>{!active ? "START" : "PAUSE"}</h3>
      </button>
      <button
        style={blackToWhite}
        onClick={resetHandler}
        // backgroundColor: "#BB86FC",
        className={`${classes.button} ${classes.buttonRoundedCorner}`}
      >
        <h3>RESET</h3>
      </button>
    </div>
  );
}
