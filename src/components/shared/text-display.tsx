import { ReactElement } from "react";

interface TextDisplayI {
  label: string;
  children: React.ReactElement | number | string;
}

export const TextDisplay = ({ children, label }: TextDisplayI) => {
  return (
    <div>
      <p className="opacity-75 border-b-2 border-slate-950 border-solid text-slate-800">
        {label}
      </p>
      <p>{children}</p>
    </div>
  );
};
