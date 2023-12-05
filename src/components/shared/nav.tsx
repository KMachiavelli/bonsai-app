"use client";

import { useState } from "react";
import { Modal } from "./modal";
import { EvaluationFormModal } from "../evaluation-form-modal";
import Link from "next/link";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen((p) => !p);
  };

  const handleToggleEvaluation = (open: boolean) => {
    setIsEvaluationOpen(open);
  };

  return (
    <div>
      <nav
        className={`fixed top-1/2 right-0 -translate-y-1/2 transition text-sky-50 opacity-90 ${
          !isOpen && `translate-x-full`
        }`}
      >
        <button
          onClick={handleOpenNav}
          className={`absolute rounded-l-lg top-1/2 -translate-y-1/2 -translate-x-full p-2 
        bg-rose-500`}
        >
          {!isOpen ? "<-" : "->"}
        </button>
        <div className="flex flex-col items-center bg-rose-600 rounded-l-lg gap-4 p-5 border-2 border-double">
          <Link href="/dashboard">
            <button className="hover:bg-rose-500">
              Dashboard <br /> <b>ダッシュボード</b>
            </button>
          </Link>
          <hr />
          <button
            className="hover:bg-rose-500"
            onClick={() => handleToggleEvaluation(true)}
          >
            Evaluate condition <br /> <b>状態</b>
          </button>
          <hr />
          <Link href="/" className="self-end border-l pl-2">
            <button>
              Home <br /> <b>ハイム</b>
            </button>
          </Link>
        </div>
      </nav>
      <EvaluationFormModal
        open={isEvaluationOpen}
        onClose={() => handleToggleEvaluation(false)}
      />
    </div>
  );
};
