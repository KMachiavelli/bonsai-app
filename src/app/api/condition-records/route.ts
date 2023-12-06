import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { revalidatePath, revalidateTag } from "next/cache";
import { RevalidateTag } from "@/lib/const/revalidate-tags";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await prisma.conditionRecord.create({ data: body });
  revalidateTag(RevalidateTag.CONDITION_RECORD);
  return NextResponse.json({}, { status: 201 });
};
