import { SortOrder } from "../../util/SortOrder";

export type ConfigurationOrderByInput = {
  configName?: SortOrder;
  configValue?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
