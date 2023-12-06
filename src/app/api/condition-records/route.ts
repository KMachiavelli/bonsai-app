import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await prisma.conditionRecord.create({ data: body });
  revalidatePath("/api/condition-records");
  return NextResponse.json({}, { status: 201 });
};
