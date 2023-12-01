import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { Treatment } from "@prisma/client";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await prisma.activity.create({ data: body });
  return NextResponse.json({}, { status: 201 });
};

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  const activity = await prisma.activity.findFirst({
    orderBy: { timestamp: "desc" },
    where: { treatment: params.get("treatment")?.toUpperCase() as Treatment },
  });
  return NextResponse.json(activity);
};
