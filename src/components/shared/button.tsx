import { DOMAttributes } from "react";

interface ButtonI extends DOMAttributes<HTMLButtonElement> {}

export const Button = ({}: ButtonI) => {
  return <button></button>;
};
