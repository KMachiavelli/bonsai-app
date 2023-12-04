import { MeasurementsService } from "@/services/measurements.service";
import { TextDisplay } from "../shared/text-display";
import { ActivitiesService } from "@/services/activities.service";

export const RecentDataDisplay = async () => {
  const { GETLastMeasurement } = MeasurementsService;
  const { GETLastTimeFertilized } = ActivitiesService;
  const measurement = await GETLastMeasurement();
  const activity = await GETLastTimeFertilized();

  return (
    <div className="absolute grid grid-columns-3 grid-flow-col w-full pt-12 mt-20 justify-evenly">
      <TextDisplay label="Moisture">{`${measurement?.moisture}%`}</TextDisplay>
      <TextDisplay label="Light">{`${measurement?.light}`}</TextDisplay>
      <TextDisplay label="Temperature">{`${measurement?.temperature}°C`}</TextDisplay>
      <TextDisplay label="Humidity">{`${measurement?.humidity}%`}</TextDisplay>
      <TextDisplay label="LTF">{`${
        (activity.timestamp as unknown as string).substring(5).split("T")[0]
      }`}</TextDisplay>
    </div>
  );
};
