export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const ENDPOINTS = {
  USER: {
    AUTH: {
      LOGIN: `${SERVER_URL}/user/auth`,
      LOGOUT: `${SERVER_URL}/user/auth/logout`,
    },
  },
  MEASUREMENTS: `${SERVER_URL}/measurements`,
  ACTIVITIES: `${SERVER_URL}/activities`,
  CONDITION_RECORDS: `${SERVER_URL}/condition-records`,
};
