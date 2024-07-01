import { Module } from "@nestjs/common";
import { ScrapingConfigurationModuleBase } from "./base/scrapingConfiguration.module.base";
import { ScrapingConfigurationService } from "./scrapingConfiguration.service";
import { ScrapingConfigurationController } from "./scrapingConfiguration.controller";
import { ScrapingConfigurationResolver } from "./scrapingConfiguration.resolver";

@Module({
  imports: [ScrapingConfigurationModuleBase],
  controllers: [ScrapingConfigurationController],
  providers: [ScrapingConfigurationService, ScrapingConfigurationResolver],
  exports: [ScrapingConfigurationService],
})
export class ScrapingConfigurationModule {}
