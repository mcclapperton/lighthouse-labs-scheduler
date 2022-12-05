import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  // take in a new mode and update the mode state with the new value
  function transition(mode, replace = false) {
    !replace ? setHistory([...history, mode]) : setHistory([...history]);
    return setMode(mode);
  }

  // allows to go to prev mode
  function back() {
    const updateHistory = [...history].slice(0, history.length - 1);
    if (updateHistory.length >= 1) {
      setHistory(updateHistory);
      setMode(updateHistory[updateHistory.length - 1]);
    }
  }
  return { mode, transition, back };
}
