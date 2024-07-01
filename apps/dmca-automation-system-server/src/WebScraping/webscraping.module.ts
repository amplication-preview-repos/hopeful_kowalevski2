import { Module } from "@nestjs/common";
import { WebScrapingService } from "./webscraping.service";
import { WebScrapingController } from "./webscraping.controller";
import { WebScrapingResolver } from "./webscraping.resolver";

@Module({
  controllers: [WebScrapingController],
  providers: [WebScrapingService, WebScrapingResolver],
  exports: [WebScrapingService],
})
export class WebScrapingModule {}
