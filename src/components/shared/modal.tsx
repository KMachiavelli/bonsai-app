"use client";

import { DialogHTMLAttributes, useEffect, useState } from "react";

export interface ModalI extends DialogHTMLAttributes<HTMLDialogElement> {
  children: JSX.Element;
  onApply: () => void;
  onClose: () => void;
  open: boolean;
}

export const Modal = ({
  children,
  onApply,
  open,
  className,
  onClose,
}: ModalI) => {
  return (
    open && (
      <>
        <div
          className={`fixed top-1/2 left-1/2 flex flex-col justify-center m-0 -translate-y-1/2 -translate-x-1/2 ${className} rounded-md z-50`}
        >
          <button className="self-end p-2" onClick={onClose}>
            ✕
          </button>
          {children}
          <button className="p-2" onClick={onApply}>
            Submit
          </button>
        </div>
        <div className="fixed left-0 top-0 w-screen h-screen backdrop-blur-sm" />
      </>
    )
  );
};
