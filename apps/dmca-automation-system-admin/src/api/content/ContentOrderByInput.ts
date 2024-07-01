import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  contentType?: SortOrder;
  contentUrl?: SortOrder;
  createdAt?: SortOrder;
  fingerprint?: SortOrder;
  foundAt?: SortOrder;
  id?: SortOrder;
  platformId?: SortOrder;
  updatedAt?: SortOrder;
};
