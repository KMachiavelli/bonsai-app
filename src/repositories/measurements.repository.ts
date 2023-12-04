import prisma from "@/lib/db";
import { Measurement } from "@prisma/client";

const getLastMeasurement = () =>
  prisma.measurement.findFirst({
    orderBy: { timestamp: "desc" },
  });

const getMeasurements = () => prisma.measurement.findMany();

const createMeasurement = (body: Omit<Measurement, "id" | "timestamp">) =>
  prisma.measurement.create({ data: body });

export const measurementsRepository = {
  getLastMeasurement,
  getMeasurements,
  createMeasurement,
};
