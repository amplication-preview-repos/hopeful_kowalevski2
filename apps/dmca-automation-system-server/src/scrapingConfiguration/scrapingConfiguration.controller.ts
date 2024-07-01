import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScrapingConfigurationService } from "./scrapingConfiguration.service";
import { ScrapingConfigurationControllerBase } from "./base/scrapingConfiguration.controller.base";

@swagger.ApiTags("scrapingConfigurations")
@common.Controller("scrapingConfigurations")
export class ScrapingConfigurationController extends ScrapingConfigurationControllerBase {
  constructor(protected readonly service: ScrapingConfigurationService) {
    super(service);
  }
}
