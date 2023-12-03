import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { Treatment } from "@prisma/client";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/lib/const/revalidate-tags";

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  let response;
  if (params.get("treatment") && params.get("last")) {
    response = await prisma.activity.findFirst({
      orderBy: { timestamp: "desc" },
      where: { treatment: params.get("treatment")?.toUpperCase() as Treatment },
    });
  } else {
    response = await prisma.activity.findMany();
  }

  return NextResponse.json(response);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await prisma.activity.create({ data: body });
  revalidateTag(RevalidateTag.LAST_ACTIVITY);
  return NextResponse.json({}, { status: 201 });
};
