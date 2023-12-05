const BASE: RequestInit = {
  credentials:
    process.env.NODE_ENV === "production" ? "same-origin" : "include",
};

const POST = <T>(url: string, body: T, options?: any) =>
  fetch(url, {
    ...BASE,
    method: "POST",
    body: JSON.stringify(body),
    ...options,
  });
const GET = (url: string, options?: any) => fetch(url, options);

export const HTTP = { POST, GET };
