import { RevalidateTag } from "@/lib/const/revalidate-tags";
import prisma from "@/lib/db";
import { measurementsRepository } from "@/repositories/measurements.repository";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const { getLastMeasurement, getMeasurements, createMeasurement } =
  measurementsRepository;

export const GET = async (req: NextRequest) => {
  let response;
  if (req.nextUrl.searchParams.get("last")) {
    response = await getLastMeasurement();
  } else {
    response = await getMeasurements();
  }

  return NextResponse.json(response, { status: 200 });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await createMeasurement(body);
  revalidateTag(RevalidateTag.MEASUREMENT);
  revalidatePath("/api/measurements");
  return NextResponse.json({}, { status: 201 });
};
