import { ReactElement } from "react";

interface TextDisplayI {
  label: string;
  children: React.ReactElement | number | string;
}

export const TextDisplay = ({ children, label }: TextDisplayI) => {
  return (
    <div className="text-slate-800">
      <p className="opacity-75 border-b-2 border-slate-950 border-solid">
        {label}
      </p>
      <p>{children}</p>
    </div>
  );
};
