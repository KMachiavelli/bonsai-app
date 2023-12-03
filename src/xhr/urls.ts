export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://bonsai-app-sandy.vercel.app/api"
    : "http://localhost:3000/api";

export const ENDPOINTS = {
  USER: {
    AUTH: {
      LOGIN: `${SERVER_URL}/user/auth`,
      LOGOUT: `${SERVER_URL}/user/auth/logout`,
    },
  },
  MEASUREMENTS: `${SERVER_URL}/measurements`,
};
