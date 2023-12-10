import { DataGraph } from "./data-graph";
import { ENDPOINTS } from "@/xhr/urls";
import { RevalidateTag } from "@/lib/const/revalidate-tags";

export const DataDashboard = async () => {
  const measurements = await fetch(ENDPOINTS.MEASUREMENTS, {
    next: { tags: [RevalidateTag.MEASUREMENT] },
  })
    .then((res) => res.json())
    .catch(() => []);
  const activities = await fetch(ENDPOINTS.ACTIVITIES, {
    next: { tags: [RevalidateTag.ACTIVITY] },
  })
    .then((res) => res.json())
    .catch(() => []);
  const conditionRecords = await fetch(ENDPOINTS.CONDITION_RECORDS, {
    next: { tags: [RevalidateTag.CONDITION_RECORD] },
  })
    .then((res) => res.json())
    .catch(() => []);

  return (
    <>
      {measurements.length && (
        <DataGraph
          measurements={measurements}
          activities={activities}
          conditionRecords={conditionRecords}
        />
      )}
      {/* <DataTable /> */}
    </>
  );
};
