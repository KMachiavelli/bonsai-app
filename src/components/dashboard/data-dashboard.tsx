import { DataGraph } from "./data-graph";
import { getAllMeasurements } from "@/services/measurements.service";
import { getAllActivities } from "@/services/activities.service";
import { getAllConditionRecords } from "@/services/condition-records.service";

export const DataDashboard = async () => {
  const measurements = await getAllMeasurements();
  const activities = await getAllActivities();
  const conditionRecords = await getAllConditionRecords();

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
