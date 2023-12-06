import { DataGraph } from "./data-graph";
import { DataTable } from "./data-table";
import { ENDPOINTS } from "@/xhr/urls";
import { RevalidateTag } from "@/lib/const/revalidate-tags";

export const DataDashboard = async () => {
  const measurementsRes = await fetch(ENDPOINTS.MEASUREMENTS, {
    next: { tags: [RevalidateTag.MEASUREMENT] },
  });
  const measurements = await measurementsRes.json();

  return (
    <>
      <DataGraph measurements={measurements} />
      <DataTable />
    </>
  );
};
