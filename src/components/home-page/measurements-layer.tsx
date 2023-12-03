import { MeasurementsService } from "@/services/measurements.service";
import { TextDisplay } from "../shared/text-display";
import { RevalidateTag } from "@/lib/const/revalidate-tags";

export const MeasurementsLayer = async () => {
  const { GETLastMeasurement } = MeasurementsService;
  const { moisture, light, temperature } = await GETLastMeasurement();

  return (
    <div className="absolute grid grid-columns-3 grid-flow-col w-full p-12 mt-20 justify-evenly">
      <TextDisplay label="Moisture">{`${moisture}%`}</TextDisplay>
      <TextDisplay label="Light">{`${light}`}</TextDisplay>
      <TextDisplay label="Temperature">{`${temperature}°C`}</TextDisplay>
    </div>
  );
};
