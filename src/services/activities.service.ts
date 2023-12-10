import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";

const { GET } = HTTP;

export const getAllActivities = () =>
  GET(ENDPOINTS.ACTIVITIES, {
    next: { tags: [RevalidateTag.ACTIVITY] },
  })
    .then((res) => res.json())
    .catch(() => []);

export const getLastActivityWhereFertilized = () =>
  GET(`${ENDPOINTS.ACTIVITIES}?last=true&treatment=fertilized`, {
    next: { tags: [RevalidateTag.ACTIVITY] },
  })
    .then((res) => res.json())
    .catch(() => ({}));
