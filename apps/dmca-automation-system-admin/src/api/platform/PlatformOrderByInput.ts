import { SortOrder } from "../../util/SortOrder";

export type PlatformOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastScraped?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
