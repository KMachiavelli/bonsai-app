import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";
import { Measurement } from "@prisma/client";

const { GET } = HTTP;

// TODO change into TOs not exact type from prisma
const GETLastMeasurement = (): Promise<Measurement> =>
  GET(`${ENDPOINTS.MEASUREMENTS}?last=true`, {
    next: { tags: [RevalidateTag.LAST_MEASUREMENT] },
  }).then((res) => res.json());

export const MeasurementsService = { GETLastMeasurement };
