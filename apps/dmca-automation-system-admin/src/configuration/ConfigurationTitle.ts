import { Configuration as TConfiguration } from "../api/configuration/Configuration";

export const CONFIGURATION_TITLE_FIELD = "configName";

export const ConfigurationTitle = (record: TConfiguration): string => {
  return record.configName?.toString() || String(record.id);
};
