import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";
import { Activity } from "@prisma/client";

const { GET } = HTTP;

// TODO change into TOs not exact type from prisma
const GETLastTimeFertilized = (): Promise<Activity> =>
  GET(`${ENDPOINTS.MEASUREMENTS}?treatment=fertilized&last=true`, {
    next: { tags: [RevalidateTag.LAST_ACTIVITY] },
  }).then((res) => res.json());

export const ActivitiesService = { GETLastTimeFertilized };
