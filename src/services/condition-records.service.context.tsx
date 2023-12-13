"use client";

import { ConditionRecord } from "@prisma/client";
import { createContext, useContext } from "react";
import { HTTP } from "@/xhr/conf";
import { ENDPOINTS } from "@/xhr/urls";

export interface ConditionRecordsServiceI {
  postConditionRecords: (
    body: Pick<ConditionRecord, "description" | "condition">
  ) => Promise<Response>;
}

export const ConditionRecordsServiceContext =
  createContext<ConditionRecordsServiceI>({} as ConditionRecordsServiceI);

export const useConditionRecords = () => {
  const { POST } = HTTP;
  const { CONDITION_RECORDS } = ENDPOINTS;

  const postConditionRecords: ConditionRecordsServiceI["postConditionRecords"] =
    (body) => {
      return POST(`${CONDITION_RECORDS}`, body);
    };

  return {
    postConditionRecords,
  };
};

interface ConditionRecordsServiceProviderI {
  children: React.ReactElement;
}

export const ConditionRecordsServiceProvider = ({
  children,
}: ConditionRecordsServiceProviderI) => {
  return (
    <ConditionRecordsServiceContext.Provider value={useConditionRecords()}>
      {children}
    </ConditionRecordsServiceContext.Provider>
  );
};
export const useConditionRecordsService = () => {
  return useContext(ConditionRecordsServiceContext);
};
