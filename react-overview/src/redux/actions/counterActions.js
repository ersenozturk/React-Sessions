import { DOWN, RESET, UP } from "../types/counterTypes";

export const upFunc = () => ({ type: UP });

export const downFunc = () => {
  return { type: DOWN };
};

export const resetFunc = () => {
  return { type: RESET };
};
