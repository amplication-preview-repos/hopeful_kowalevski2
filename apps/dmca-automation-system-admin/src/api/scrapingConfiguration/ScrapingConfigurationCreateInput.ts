import { InputJsonValue } from "../../types";

export type ScrapingConfigurationCreateInput = {
  additionalParams?: InputJsonValue;
  platform?: string | null;
  scrapeDepth?: number | null;
  status?: "Option1" | null;
  url?: string | null;
};
