import { MeasurementsService } from "@/services/measurements.service";
import { TextDisplay } from "../shared/text-display";
import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { ActivitiesService } from "@/services/activities.service";

export const RecentDataDisplay = async () => {
  const { GETLastMeasurement } = MeasurementsService;
  const { GETLastTimeFertilized } = ActivitiesService;
  const { moisture, light, temperature } = await GETLastMeasurement();
  const { timestamp } = await GETLastTimeFertilized();

  return (
    <div className="absolute grid grid-columns-3 grid-flow-col w-full pt-12 mt-20 justify-evenly">
      <TextDisplay label="Moisture">{`${moisture}%`}</TextDisplay>
      <TextDisplay label="Light">{`${light}`}</TextDisplay>
      <TextDisplay label="Temperature">{`${temperature}°C`}</TextDisplay>
      <TextDisplay label="LTF">{`${
        (timestamp as unknown as string).split("T")[0]
      }`}</TextDisplay>
    </div>
  );
};
