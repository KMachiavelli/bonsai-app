import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";
import { ConditionRecord, Measurement } from "@prisma/client";

const { POST } = HTTP;

// TODO change into TOs not exact type from prisma
const POSTConditionRecord = (body: ConditionRecord): Promise<Measurement> =>
  POST(`${ENDPOINTS.MEASUREMENTS}?last=true`, {
    next: { tags: [RevalidateTag.LAST_MEASUREMENT] },
  }).then((res) => res.json());

export const MeasurementsService = { POSTConditionRecord };
