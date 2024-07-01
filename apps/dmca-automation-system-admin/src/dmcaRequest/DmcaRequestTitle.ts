import { DmcaRequest as TDmcaRequest } from "../api/dmcaRequest/DmcaRequest";

export const DMCAREQUEST_TITLE_FIELD = "id";

export const DmcaRequestTitle = (record: TDmcaRequest): string => {
  return record.id?.toString() || String(record.id);
};
