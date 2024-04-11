import { useState, useRef } from "react";

export const Ref = () => {
  return <Stopwatch />;
};

function Stopwatch() {
  const [startTime, setStartTime] = useState<number>();
  const [now, setNow] = useState<number>();
  const intervalRef = useRef<number>();

  console.log("render");

  function handleStart() {
    setStartTime(Date.now());

    clearInterval(intervalRef.current);

    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 10);

    intervalRef.current = intervalId;
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != undefined && now != undefined) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
