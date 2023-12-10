import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { TextDisplay } from "../shared/text-display";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";

export const RecentDataDisplay = async () => {
  const measurement = await fetch(`${ENDPOINTS.MEASUREMENTS}?last=true`, {
    next: { tags: [RevalidateTag.MEASUREMENT] },
  })
    .then((res) => res.json())
    .catch(() => ({}));
  const activity = await fetch(
    `${ENDPOINTS.ACTIVITIES}?last=true&treatment=fertilized`,
    { next: { tags: [RevalidateTag.ACTIVITY] } }
  )
    .then((res) => res.json())
    .catch(() => ({}));

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
        <p className="fixed right-0 bottom-0 bg-slate-100 opacity-50 rounded-tl-lg p-1">
          Measurement: {new Date(measurement.timestamp).toLocaleString()}
        </p>
      </div>
    )
  );
};
