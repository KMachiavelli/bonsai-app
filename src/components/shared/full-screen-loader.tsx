import { RingLoader } from "react-spinners";

export const FullScreenLoader = () => {
  return (
    <div className="z-50 fixed h-screen w-screen backdrop-blur-sm">
      <RingLoader
        size={150}
        color="crimson"
        className="!absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      />
    </div>
  );
};
