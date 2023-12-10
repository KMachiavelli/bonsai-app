import prisma from "@/lib/db";

const getConditionRecords = async () => {
  return await prisma.conditionRecord.findMany();
};

export const conditionRecordsRepository = { getConditionRecords };
