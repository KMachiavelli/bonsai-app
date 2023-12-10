import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";

const { GET } = HTTP;

export const getAllMeasurements = () =>
  GET(ENDPOINTS.MEASUREMENTS, {
    next: { tags: [RevalidateTag.MEASUREMENT] },
  })
    .then((res) => res.json())
    .catch(() => []);

export const getLastMeasurement = () =>
  GET(`${ENDPOINTS.MEASUREMENTS}?last=true`, {
    next: { tags: [RevalidateTag.MEASUREMENT] },
  })
    .then((res) => res.json())
    .catch(() => ({}));
