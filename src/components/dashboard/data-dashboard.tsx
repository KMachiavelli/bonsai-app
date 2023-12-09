import { DataGraph } from "./data-graph";
import { ENDPOINTS } from "@/xhr/urls";
import { RevalidateTag } from "@/lib/const/revalidate-tags";

export const DataDashboard = async () => {
  const measurementsRes = await fetch(ENDPOINTS.MEASUREMENTS, {
    next: { tags: [RevalidateTag.MEASUREMENT] },
  });
  const acticitiesRes = await fetch(ENDPOINTS.ACTIVITIES, {
    next: { tags: [RevalidateTag.ACTIVITY] },
  });
  const measurements = await measurementsRes.json();
  const activities = await acticitiesRes.json();

  return (
    <>
      <DataGraph measurements={measurements} activities={activities} />
      {/* <DataTable /> */}
    </>
  );
};
