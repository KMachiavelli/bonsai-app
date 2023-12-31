import { NextRequest, NextResponse } from "next/server";
import { Treatment } from "@prisma/client";
import { revalidatePath, revalidateTag } from "next/cache";
import { activitiesRepository } from "@/repositories/activities.repository";
import { RevalidateTag } from "@/lib/const/revalidate-tags";

const { getActivites, getLastActivityByTreatment, createActivity } =
  activitiesRepository;

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  let response;
  if (params.get("treatment") && params.get("last")) {
    const treatment = params.get("treatment")?.toUpperCase() as Treatment;
    response = await getLastActivityByTreatment(treatment);
  } else {
    response = await getActivites();
  }

  return NextResponse.json(response);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await createActivity(body);
  //   revalidateTag(RevalidateTag.ACTIVITY);
  revalidatePath("/dashboard");
  revalidatePath("/");
  return NextResponse.json({}, { status: 201 });
};
