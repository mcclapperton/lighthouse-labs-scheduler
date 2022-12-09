import { useState } from "react";

export default function useVisualMode(initial) {
  // const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  // take in a new mode and update the mode state with the new value
  function transition(mode, replace = false) {
    setHistory((prev) => {
      // make shallow copy
      const newHistory = [...prev];
      if (replace) {
        // if replace take off last element
        newHistory.splice(prev.length - 1, 1);
      }
      newHistory.push(mode);
      return newHistory;
    });
    return;
  }
  // allows to go to prev mode
  function back() {
    if (history.length === 1) {
      return;
    }
    setHistory((prev) => {
      const newHistory = prev.slice(0, prev.length - 1);
      return newHistory;
    });
  }
  return { mode: history[history.length - 1], transition, back };
}
