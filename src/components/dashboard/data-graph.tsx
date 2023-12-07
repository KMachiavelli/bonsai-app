"use client";

import { Measurement } from "@prisma/client";
import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
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
import { rangeMap, unitMap } from "@/lib/measurement-utils";

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
            <h2 className="text-center text-rose-400 bg-slate-800 rounded-t-lg">
              {key}
            </h2>
            <ResponsiveContainer
              width={"100%"}
              height={300}
              className={"bg-slate-700 opacity-80 rounded-b-lg"}
            >
              <LineChart data={measurements}>
                <CartesianGrid
                  stroke="#ccc"
                  fillOpacity={0.8}
                  fill="black"
                  vertical={false}
                />
                <Line
                  type="basis"
                  dataKey={key}
                  stroke="#d88496"
                  dot={false}
                  strokeWidth={3}
                />
                <XAxis
                  dataKey="timestamp"
                  tick={{ fill: "white" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(ts) => {
                    const date = new Date(ts);
                    if (date.getDate() % 1 === 0) {
                      return format(date, "MMM d|");
                    }
                    return "";
                  }}
                />
                <YAxis tick={{ fill: "white" }} domain={rangeMap.get(key)} />
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
          {attr}{" "}
          <b>
            {payload[0].payload[attr]}
            {unitMap.get(attr)}
          </b>
        </p>
        <p>
          {format(
            new Date(payload[0].payload.timestamp),
            "eeee, d MMM, yyyy HH:mm",
            { locale: pl }
          )}
        </p>
      </div>
    );
  }
  return null;
}
