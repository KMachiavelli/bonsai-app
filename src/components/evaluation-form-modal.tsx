"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Modal, ModalI } from "./shared/modal";
import ReactSlider from "react-slider";

interface EvaluationFormModalI extends Pick<ModalI, "open"> {}

export const EvaluationFormModal = ({ open }: EvaluationFormModalI) => {
  const [condition, setCondition] = useState(3);
  const [description, setDescription] = useState("");
  const handleApply = () => {};

  const handleOnChangeSlider: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setCondition(parseInt(target.value));
  };

  const handleOnChangeTextArea: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setDescription(target.value);
  };

  return (
    <Modal
      open={open}
      onApply={handleApply}
      className="bg-rose-500 opacity-90 text-slate-50"
    >
      <form className="bg-rose-600 flex flex-col p-2 gap-2">
        <label className="flex flex-col gap-2">
          Tree condition
          <input
            type="range"
            defaultValue={condition}
            min={0}
            max={5}
            className="bg-slate-500"
            onChange={handleOnChangeSlider}
          />
          {condition}
        </label>
        <hr />
        <label
          className="flex flex-col gap-2"
          onChange={handleOnChangeTextArea as FormEventHandler}
        >
          Additional description
          <textarea className="bg-rose-900" value={description} />
        </label>
      </form>
    </Modal>
  );
};
