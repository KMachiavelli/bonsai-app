"use client";

import { DialogHTMLAttributes, useEffect, useState } from "react";

export interface ModalI extends DialogHTMLAttributes<HTMLDialogElement> {
  children: JSX.Element;
  onApply: () => void;
  open: boolean;
}

export const Modal = ({ children, onApply, open, className }: ModalI) => {
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  const handleClose = () => {
    setInternalOpen(false);
  };

  return (
    internalOpen && (
      <div
        className={`fixed top-1/2 left-1/2 flex flex-col justify-center m-0 -translate-y-1/2 -translate-x-1/2 ${className} rounded-md`}
      >
        <button className="self-end p-2" onClick={handleClose}>
          ✕
        </button>
        {children}
        <button className="p-2" onClick={onApply}>
          Accept
        </button>
      </div>
    )
  );
};
