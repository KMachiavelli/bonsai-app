import { TextDisplay } from "../shared/text-display";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";

export const RecentDataDisplay = async () => {
  const { GET } = HTTP;
  const measurementsRes = await GET(`${ENDPOINTS.MEASUREMENTS}?last=true`);
  const activitiesRes = await GET(
    `${ENDPOINTS.ACTIVITIES}?last=true&treatment=fertilized`
  );
  const measurement = await measurementsRes.json();
  const activity = await activitiesRes.json();

  return (
    <div className="absolute grid grid-columns-3 grid-flow-col w-full pt-12 mt-20 justify-evenly">
      <TextDisplay label="Moisture">{`${measurement?.moisture}%`}</TextDisplay>
      <TextDisplay label="Light">{`${measurement?.light}`}</TextDisplay>
      <TextDisplay label="Temperature">{`${measurement?.temperature}°C`}</TextDisplay>
      <TextDisplay label="Humidity">{`${measurement?.humidity}%`}</TextDisplay>
      <TextDisplay label="LTF">{`${
        new Date(activity?.timestamp).toISOString().substring(5).split("T")[0]
      }`}</TextDisplay>
    </div>
  );
};
