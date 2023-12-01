import prisma from "@/lib/db";
import { TextDisplay } from "../shared/text-display";

export const MeasurementsLayer = async () => {
  const { moisture, light, temperature } =
    (await prisma.measurement.findFirst())!;

  return (
    <div className="absolute grid grid-columns-3 grid-flow-col w-full p-12 mt-20 justify-evenly">
      <TextDisplay label="Moisture">{`${moisture}%`}</TextDisplay>
      <TextDisplay label="Light">{`${light}`}</TextDisplay>
      <TextDisplay label="Temperature">{`${temperature}°C`}</TextDisplay>
    </div>
  );
};
