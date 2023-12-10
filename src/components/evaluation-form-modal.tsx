"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Modal, ModalI } from "./shared/modal";
import "rc-slider/assets/index.css";
import { HorizontalSlider } from "./shared/horizontal-slider";
import { useConditionRecordsService } from "@/services/condition-records.service.context";
import { toast } from "react-toastify";

interface EvaluationFormModalI extends Pick<ModalI, "open" | "onClose"> {}

export const EvaluationFormModal = ({
  open,
  onClose,
}: EvaluationFormModalI) => {
  const [condition, setCondition] = useState(3);
  const [description, setDescription] = useState("");
  const { postConditionRecords } = useConditionRecordsService();

  const handleOnChangeSlider = (value: number | number[]) => {
    setCondition(value as number);
  };

  const handleOnChangeTextArea: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setDescription(target.value);
  };

  const handleSubmit = () => {
    toast.promise(
      postConditionRecords({ condition, description }).then(() => {
        onClose();
      }),
      { pending: "Saving data", success: "Done" }
    );
  };

  return (
    <Modal
      open={open}
      onApply={handleSubmit}
      onClose={onClose}
      className="bg-rose-500 opacity-90 text-slate-50"
    >
      <form className="bg-rose-600 flex flex-col p-3 gap-2">
        <label className="flex flex-col gap-2">
          Tree condition
          <HorizontalSlider
            defaultValue={condition}
            min={0}
            max={5}
            onChange={handleOnChangeSlider}
            marksArray={[0, 1, 2, 3, 4, 5]}
          />
        </label>
        <br />
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
