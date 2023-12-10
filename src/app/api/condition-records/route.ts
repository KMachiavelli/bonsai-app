import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { revalidatePath, revalidateTag } from "next/cache";
import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { conditionRecordsRepository } from "@/repositories/condition-records.repository";

const { getConditionRecords } = conditionRecordsRepository;

export const GET = async (req: NextRequest) => {
  const response = await getConditionRecords();
  return NextResponse.json(response);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await prisma.conditionRecord.create({ data: body });
  revalidateTag(RevalidateTag.CONDITION_RECORD);
  revalidatePath("/api/condition-records");
  return NextResponse.json({}, { status: 201 });
};
