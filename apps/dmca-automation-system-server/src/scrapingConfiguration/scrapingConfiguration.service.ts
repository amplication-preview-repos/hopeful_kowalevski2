import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScrapingConfigurationServiceBase } from "./base/scrapingConfiguration.service.base";

@Injectable()
export class ScrapingConfigurationService extends ScrapingConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
