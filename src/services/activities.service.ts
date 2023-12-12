import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";
import { Activity } from "@prisma/client";

const { GET } = HTTP;

export const getAllActivities = (): Promise<Activity[]> =>
  GET(ENDPOINTS.ACTIVITIES, {
    next: { tags: [RevalidateTag.ACTIVITY] },
  })
    .then((res) => res.json())
    .catch(() => []);

export const getLastActivityWhereFertilized = (): Promise<Activity> =>
  GET(`${ENDPOINTS.ACTIVITIES}?last=true&treatment=fertilized`, {
    next: { tags: [RevalidateTag.ACTIVITY] },
  })
    .then((res) => res.json())
    .catch(() => ({}));
