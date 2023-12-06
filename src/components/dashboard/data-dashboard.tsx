import { measurementsRepository } from "@/repositories/measurements.repository";
import { DataGraph } from "./data-graph";
import { DataTable } from "./data-table";

export const dynamic = "force-dynamic";

export const DataDashboard = async () => {
  const { getMeasurements } = measurementsRepository;
  const measurements = await getMeasurements();

  return (
    <>
      <DataGraph measurements={measurements} />
      <DataTable />
    </>
  );
};
