import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await prisma.measurement.create({ data: body });
  return NextResponse.json({}, { status: 201 });
};
