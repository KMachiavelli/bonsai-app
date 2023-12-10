import { RevalidateTag } from "@/lib/const/revalidate-tags";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";

const { GET } = HTTP;

export const getAllConditionRecords = () =>
  GET(ENDPOINTS.CONDITION_RECORDS, {
    next: { tags: [RevalidateTag.CONDITION_RECORD] },
  })
    .then((res) => res.json())
    .catch(() => []);
