import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await prisma.conditionRecord.create({ data: body });
  return NextResponse.json({}, { status: 201 });
};
