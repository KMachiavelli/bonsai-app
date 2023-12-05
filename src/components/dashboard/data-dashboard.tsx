import { measurementsRepository } from "@/repositories/measurements.repository";
import { DataGraph } from "./data-graph";
import { DataTable } from "./data-table";

const { getMeasurements } = measurementsRepository;

export const DataDashboard = async () => {
  const measurements = await getMeasurements();

  return (
    <>
      <DataGraph measurements={measurements} />
      <DataTable />
    </>
  );
};
