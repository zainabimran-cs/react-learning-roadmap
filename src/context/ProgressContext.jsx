import { useEffect, useState } from "react";
import { ProgressContext } from "./ProgressContextValue";

export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("completedTopics")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("completedTopics", JSON.stringify(completed));
  }, [completed]);

  function toggleTopic(id) {
    const key = String(id);
    setCompleted((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]
    );
  }

  function isCompleted(id) {
    return completed.includes(String(id));
  }

  return (
    <ProgressContext.Provider value={{ completed, toggleTopic, isCompleted }}>
      {children}
    </ProgressContext.Provider>
  );
}
