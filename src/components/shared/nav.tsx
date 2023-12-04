"use client";

import { useState } from "react";
import { Modal } from "./modal";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <nav
      className={`fixed top-1/2 right-0 -translate-y-1/2 transition text-sky-50 opacity-90 ${
        !isOpen && `translate-x-full`
      }`}
    >
      <button
        onClick={handleOpenNav}
        className={`absolute rounded-l-lg top-1/2 -translate-y-1/2 -translate-x-full 
        p-2 bg-slate-100 bg-rose-500 `}
      >
        {!isOpen ? "<-" : "->"}
      </button>
      <div className="flex flex-col bg-rose-600 rounded-l-lg gap-4 p-5 border-2 border-double">
        <p>
          Data charts <br /> <b>チャート</b>
        </p>
        <hr />
        <p>
          Evaluate condition <br /> <b>状態</b>
        </p>
      </div>
      <Modal content={<p>XDD</p>} onApply={() => alert("applied")} open />
    </nav>
  );
};
