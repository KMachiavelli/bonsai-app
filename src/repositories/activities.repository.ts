import prisma from "@/lib/db";
import { Activity, Treatment } from "@prisma/client";

const getLastActivityByTreatment = (treatment: Treatment) =>
  prisma.activity.findFirst({
    orderBy: { timestamp: "desc" },
    where: { treatment },
  });

const getActivites = () => prisma.activity.findMany();

const createActivity = (body: Omit<Activity, "id" | "timestamp">) =>
  prisma.activity.create({ data: body });

export const activitiesRepository = {
  getActivites,
  getLastActivityByTreatment,
  createActivity,
};
