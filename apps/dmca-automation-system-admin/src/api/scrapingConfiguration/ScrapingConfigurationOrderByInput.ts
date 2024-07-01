import { SortOrder } from "../../util/SortOrder";

export type ScrapingConfigurationOrderByInput = {
  additionalParams?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  platform?: SortOrder;
  scrapeDepth?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
