import { toast } from "react-toastify";

const BASE: RequestInit = {
  credentials:
    process.env.NODE_ENV === "production" ? "same-origin" : "include",
};

const patchedFetch = async (url: RequestInfo, options?: RequestInit) => {
  const res = await fetch(url, options);
  const { status } = res;

  switch (status) {
    case 401:
      toast.error("Unathorized");
      break;
    case 400:
      toast.error("Invalid request");
      break;
    case 403:
      toast.error("Forbidden for this user");
      break;
    case 404:
      toast.error("Couldn't find particular resource");
      break;
  }

  return res;
};

const POST = <T>(url: RequestInfo, body: T, options?: RequestInit) =>
  patchedFetch(url, {
    ...BASE,
    method: "POST",
    body: JSON.stringify(body),
    ...options,
  });
const GET = (url: RequestInfo, options?: RequestInit) =>
  patchedFetch(url, { ...options, method: "GET" });

export const HTTP = { POST, GET };
