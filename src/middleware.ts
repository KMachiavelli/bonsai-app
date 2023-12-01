import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  try {
    console.log(new Date().toUTCString(), await req.json());
  } catch (e) {
    console.log(new Date().toUTCString(), "GET");
  }
  return NextResponse.next();
};

export const config = {
  matcher: "/api/:path*",
};
