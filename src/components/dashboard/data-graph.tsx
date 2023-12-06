"use client";

import { Measurement } from "@prisma/client";
import { format, parseISO } from "date-fns";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  Tooltip,
} from "recharts";

interface DataGraphI {
  measurements: Measurement[];
}

export const DataGraph = ({ measurements }: DataGraphI) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {Object.keys(measurements[0])
        .filter((key) => key !== "id" && key !== "timestamp")
        .map((key) => (
          <div key={key} className="w-full">
            <h2 className="text-center text-rose-500 ">{key}</h2>
            <ResponsiveContainer width={"100%"} height={300}>
              <LineChart data={measurements}>
                <CartesianGrid
                  stroke="#ccc"
                  fillOpacity={0.6}
                  fill="black"
                  vertical={false}
                />
                <Line type="basis" dataKey={key} stroke="#d88496" />
                <XAxis
                  dataKey="timestamp"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(ts) => {
                    if (ts.getDate() % 1 === 0) {
                      return format(ts, "MMM d|");
                    }
                    return "";
                  }}
                />
                <YAxis />
                <Tooltip content={<CustomTooltip attr={key} />} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
    </div>
  );
};

function CustomTooltip({ active, payload, label, attr }: any) {
  if (active && payload[0]) {
    return (
      <div className="opacity-70 text-slate-50">
        <p>
          {attr} <b>{payload[0].payload[attr]}%</b>
        </p>
        <p>{format(payload[0].payload.timestamp, "eeee, d MMM, yyyy")}</p>
      </div>
    );
  }
  return null;
}
