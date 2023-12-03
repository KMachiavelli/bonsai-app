import { RevalidateTag } from "@/lib/const/revalidate-tags";
import prisma from "@/lib/db";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  let response;
  if (req.nextUrl.searchParams.get("last")) {
    response = await prisma.measurement.findFirst({
      orderBy: { timestamp: "desc" },
    });
  } else {
    response = await prisma.measurement.findMany();
  }

  return NextResponse.json(response, { status: 200 });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await prisma.measurement.create({ data: body });
  revalidateTag(RevalidateTag.LAST_MEASUREMENT);
  return NextResponse.json({}, { status: 201 });
};
