import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";
import { Measurement } from "@prisma/client";

const { GET } = HTTP;

export const getAllMeasurements = (): Promise<Measurement[]> =>
  GET(ENDPOINTS.MEASUREMENTS, {
    next: { tags: [RevalidateTag.MEASUREMENT] },
  })
    .then((res) => res.json())
    .catch(() => []);

export const getLastMeasurement = (): Promise<Measurement> =>
  GET(`${ENDPOINTS.MEASUREMENTS}?last=true`, {
    next: { tags: [RevalidateTag.MEASUREMENT] },
  })
    .then((res) => res.json())
    .catch(() => ({}));
