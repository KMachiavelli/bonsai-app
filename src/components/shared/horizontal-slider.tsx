import Slider, { SliderProps, SliderRef } from "rc-slider";
import { HTMLAttributes, ReactNode, useMemo } from "react";

// interface HorizontalSlider
//   extends React.ForwardRefExoticComponent<
//     SliderProps<number | number[]> & React.RefAttributes<SliderRef>
//   > {
//   marks?: number[];
// }

type HorizontalSlider = (SliderProps<number | number[]> &
  React.RefAttributes<SliderRef>) & {
  marksArray: number[];
};

export const HorizontalSlider = ({
  marksArray,
  ...props
}: HorizontalSlider) => {
  const sliderMarks = useMemo(() => {
    const obj: Record<number, ReactNode> = {};
    marksArray!.forEach((val, i) => {
      obj[i] = <p className="text-slate-50">{val}</p>;
    });
    return obj;
  }, [marksArray]);

  return (
    <Slider
      {...props}
      marks={sliderMarks}
      styles={{
        rail: { background: "transparent" },
        track: { background: "darkred" },
        handle: { background: "darkred" },
      }}
      dotStyle={{ width: 1 }}
    />
  );
};
