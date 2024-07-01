import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WebScrapingService } from "./webscraping.service";

@swagger.ApiTags("webScrapings")
@common.Controller("webScrapings")
export class WebScrapingController {
  constructor(protected readonly service: WebScrapingService) {}

  @common.Get("/status")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchScrapingStatus(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchScrapingStatus(body);
      }

  @common.Post("/scrape")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScrapePlatform(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ScrapePlatform(body);
      }

  @common.Post("/startScraping")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartScraping(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.StartScraping(body);
      }

  @common.Post("/stopScraping")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StopScraping(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.StopScraping(body);
      }
}
