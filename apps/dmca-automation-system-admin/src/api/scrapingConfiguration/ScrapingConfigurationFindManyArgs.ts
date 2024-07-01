import { ScrapingConfigurationWhereInput } from "./ScrapingConfigurationWhereInput";
import { ScrapingConfigurationOrderByInput } from "./ScrapingConfigurationOrderByInput";

export type ScrapingConfigurationFindManyArgs = {
  where?: ScrapingConfigurationWhereInput;
  orderBy?: Array<ScrapingConfigurationOrderByInput>;
  skip?: number;
  take?: number;
};
