"use client";

import {
  Activity,
  ConditionRecord,
  Measurement,
  Treatment,
} from "@prisma/client";
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
  ComposedChart,
  Bar,
  Cell,
  Legend,
} from "recharts";
import { rangeMap, unitMap } from "@/lib/measurement-utils";
import { useMemo } from "react";
import { tickDateFormatter, tooltipDateFormatter } from "./utils";
import React from "react";

interface DataGraphI {
  measurements: Measurement[];
  activities: Activity[];
  conditionRecords: ConditionRecord[];
}

export const DataGraph = ({
  measurements,
  activities,
  conditionRecords,
}: DataGraphI) => {
  const processedActivites = useMemo(
    () =>
      activities.map((activity: Activity) => ({
        ...activity,
        mock: 100,
      })),
    [activities]
  );

  const combinedData: any[] | undefined = useMemo(() => {
    if (processedActivites.length) {
      return [...processedActivites, ...measurements].sort(
        (d1, d2) =>
          new Date(d1.timestamp).getTime() - new Date(d2.timestamp).getTime()
      );
    }
  }, [processedActivites]);

  return (
    <div className="">
      <div className="w-full">
        {Object.keys(measurements[0])
          .filter((key) => key !== "id" && key !== "timestamp")
          .map((key) => (
            <ResponsiveContainer
              key={key}
              width={"100%"}
              height={300}
              className={"bg-slate-700 opacity-80"}
            >
              <ComposedChart data={combinedData}>
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.9} />
                    <stop offset="75%" stopColor="#d88496" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  stroke="#ccc"
                  fillOpacity={0.8}
                  fill="black"
                  vertical={false}
                />
                <Area
                  dataKey={key}
                  stroke="#d88496"
                  dot={false}
                  fill="url(#color)"
                  strokeWidth={2}
                />
                {key === "moisture" && (
                  <Bar dataKey="mock">
                    {combinedData?.map(({ treatment }, i) => (
                      <Cell
                        key={`cell-${i}`}
                        width={3}
                        fill={
                          treatment === Treatment.WATERED
                            ? "#1d4ed8"
                            : "#15803d"
                        }
                      />
                    ))}
                  </Bar>
                )}
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
                <YAxis
                  tick={{ fill: "white" }}
                  domain={rangeMap.get(key)}
                  tickFormatter={(v) => v.toFixed(0)}
                  tickMargin={0}
                  width={45}
                />
                <Tooltip content={<CustomTooltip attr={key} />} />
                <Legend
                  layout="horizontal"
                  verticalAlign="top"
                  content={<CustomLegend />}
                />
              </ComposedChart>
            </ResponsiveContainer>
          ))}
        <ResponsiveContainer
          width={"100%"}
          height={300}
          className={"bg-slate-700 opacity-80 rounded-b-lg"}
        >
          <ComposedChart data={conditionRecords}>
            <CartesianGrid
              stroke="#ccc"
              fillOpacity={0.8}
              fill="black"
              vertical={false}
            />
            <Bar dataKey="condition" fill="#d88496" barSize={15} />
            <XAxis
              dataKey="timestamp"
              tick={{ fill: "white" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={tickDateFormatter}
            />
            <YAxis
              tick={{ fill: "white" }}
              dataKey="condition"
              domain={[0, 5]}
              tickCount={6}
              width={45}
            />
            <Tooltip content={<CustomTooltip attr={"condition"} />} />
            <Legend
              layout="horizontal"
              verticalAlign="top"
              content={<CustomLegend />}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label, attr }: any) => {
  if (active && payload[0]) {
    return (
      <div className="opacity-70 text-slate-50">
        <p>
          {`${attr} `}
          <b>
            {payload[0].payload[attr]}
            {unitMap.get(attr)}
          </b>
        </p>
        <p>{tooltipDateFormatter(payload[0].payload.timestamp)}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = (props: any) => {
  return (
    <div className="flex flex-row gap-2 justify-center mb-3 bg-slate-900">
      {props.payload.map(({ dataKey, color }: any) =>
        dataKey === "mock" ? (
          <React.Fragment key={dataKey}>
            <p className="text-blue-500">{"\u275A"} watered</p>
            <p className="text-green-500">{"\u275A"} fertilized</p>
          </React.Fragment>
        ) : (
          <div style={{ color }} key={dataKey}>
            <p>
              {"\u26F6 "}
              {dataKey}
            </p>
          </div>
        )
      )}
    </div>
  );
};
