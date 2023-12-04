import { JsxElement } from "typescript";

interface ModalI {
  content: JSX.Element;
  onApply: () => void;
  open: boolean;
}

export const Modal = ({ content, onApply, open }: ModalI) => {
  return (
    <dialog open={open} className="flex flex-col justify-center">
      {content}
      <button>Accept</button>
    </dialog>
  );
};
