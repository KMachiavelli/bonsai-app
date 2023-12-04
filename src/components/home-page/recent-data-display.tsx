import { activitiesRepository } from "@/repositories/activities.repository";
import { TextDisplay } from "../shared/text-display";
import { measurementsRepository } from "@/repositories/measurements.repository";
import { Treatment } from "@prisma/client";

export const RecentDataDisplay = async () => {
  const { getLastMeasurement } = measurementsRepository;
  const { getLastActivityByTreatment } = activitiesRepository;
  const measurement = await getLastMeasurement();
  const activity = await getLastActivityByTreatment(Treatment.FERTILIZED);

  return (
    <div className="absolute grid grid-columns-3 grid-flow-col w-full pt-12 mt-20 justify-evenly">
      <TextDisplay label="Moisture">{`${measurement?.moisture}%`}</TextDisplay>
      <TextDisplay label="Light">{`${measurement?.light}`}</TextDisplay>
      <TextDisplay label="Temperature">{`${measurement?.temperature}°C`}</TextDisplay>
      <TextDisplay label="Humidity">{`${measurement?.humidity}%`}</TextDisplay>
      <TextDisplay label="LTF">{`${
        activity?.timestamp?.toISOString().substring(5).split("T")[0]
      }`}</TextDisplay>
    </div>
  );
};
