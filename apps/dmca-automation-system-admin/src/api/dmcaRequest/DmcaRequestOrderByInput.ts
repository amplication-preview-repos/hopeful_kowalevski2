import { SortOrder } from "../../util/SortOrder";

export type DmcaRequestOrderByInput = {
  contentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  platformContact?: SortOrder;
  requestDate?: SortOrder;
  requestStatus?: SortOrder;
  updatedAt?: SortOrder;
};
