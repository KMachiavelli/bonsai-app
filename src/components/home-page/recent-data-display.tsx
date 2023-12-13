import { TextDisplay } from "../shared/text-display";
import { getLastMeasurement } from "@/services/measurements.service";
import { getLastActivityWhereFertilized } from "@/services/activities.service";
import { HTTP } from "@/xhr/conf";

export const RecentDataDisplay = async () => {
  const measurement = await getLastMeasurement();
  const activity = await getLastActivityWhereFertilized();

  return (
    measurement?.moisture && (
      <div className="absolute grid grid-columns-3 grid-flow-col w-full pt-12 mt-20 justify-evenly">
        <TextDisplay label="Moisture">{`${measurement?.moisture}%`}</TextDisplay>
        <TextDisplay label="Light">{`${measurement?.light}`}</TextDisplay>
        <TextDisplay label="Temperature">{`${measurement?.temperature}°C`}</TextDisplay>
        <TextDisplay label="Humidity">{`${measurement?.humidity}%`}</TextDisplay>
        <TextDisplay label="LTF">{`${
          new Date(activity?.timestamp).toISOString().substring(5).split("T")[0]
        }`}</TextDisplay>
        <p className="fixed right-0 bottom-0 bg-slate-100 opacity-50 rounded-tl-lg p-1 color-slate-50">
          Measurement: {new Date(measurement.timestamp).toLocaleString()}
        </p>
      </div>
    )
  );
};
