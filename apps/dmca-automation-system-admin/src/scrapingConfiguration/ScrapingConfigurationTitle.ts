import { ScrapingConfiguration as TScrapingConfiguration } from "../api/scrapingConfiguration/ScrapingConfiguration";

export const SCRAPINGCONFIGURATION_TITLE_FIELD = "platform";

export const ScrapingConfigurationTitle = (
  record: TScrapingConfiguration
): string => {
  return record.platform?.toString() || String(record.id);
};
