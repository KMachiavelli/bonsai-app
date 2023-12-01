import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ health: "alive" }, { status: 200 });
};
