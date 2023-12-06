import { measurementsRepository } from "@/repositories/measurements.repository";
import { DataGraph } from "./data-graph";
import { DataTable } from "./data-table";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";

export const DataDashboard = async () => {
  const { GET } = HTTP;
  const measurementsRes = await GET(ENDPOINTS.MEASUREMENTS);
  const measurements = await measurementsRes.json();

  return (
    <>
      <DataGraph measurements={measurements} />
      <DataTable />
    </>
  );
};
