import * as graphql from "@nestjs/graphql";
import { ScrapingConfigurationResolverBase } from "./base/scrapingConfiguration.resolver.base";
import { ScrapingConfiguration } from "./base/ScrapingConfiguration";
import { ScrapingConfigurationService } from "./scrapingConfiguration.service";

@graphql.Resolver(() => ScrapingConfiguration)
export class ScrapingConfigurationResolver extends ScrapingConfigurationResolverBase {
  constructor(protected readonly service: ScrapingConfigurationService) {
    super(service);
  }
}
