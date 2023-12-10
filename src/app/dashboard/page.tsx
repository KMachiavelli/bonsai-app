import { DataDashboard } from "@/components/dashboard/data-dashboard";
import { FullScreenLoader } from "@/components/shared/full-screen-loader";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="h-screen backdrop-blur-sm overflow-y-auto">
      <Suspense fallback={<FullScreenLoader />}>
        <DataDashboard />
      </Suspense>
    </div>
  );
}
