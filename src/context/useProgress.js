import { useContext } from "react";
import { ProgressContext } from "./ProgressContextValue";

export function useProgress() {
  return useContext(ProgressContext);
}