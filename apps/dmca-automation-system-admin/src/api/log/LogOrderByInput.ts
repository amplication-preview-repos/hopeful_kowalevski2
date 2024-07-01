import { SortOrder } from "../../util/SortOrder";

export type LogOrderByInput = {
  contentId?: SortOrder;
  createdAt?: SortOrder;
  dmcaRequestId?: SortOrder;
  id?: SortOrder;
  logDate?: SortOrder;
  logType?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
