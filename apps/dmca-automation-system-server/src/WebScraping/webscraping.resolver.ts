import * as graphql from "@nestjs/graphql";
import { ScrapePlatformInput } from "../webScraping/ScrapePlatformInput";
import { StartScrapingInput } from "../webScraping/StartScrapingInput";
import { WebScrapingService } from "./webscraping.service";

export class WebScrapingResolver {
  constructor(protected readonly service: WebScrapingService) {}

  @graphql.Query(() => String)
  async FetchScrapingStatus(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchScrapingStatus(args);
  }

  @graphql.Mutation(() => String)
  async ScrapePlatform(
    @graphql.Args()
    args: ScrapePlatformInput
  ): Promise<string> {
    return this.service.ScrapePlatform(args);
  }

  @graphql.Mutation(() => String)
  async StartScraping(
    @graphql.Args()
    args: StartScrapingInput
  ): Promise<string> {
    return this.service.StartScraping(args);
  }

  @graphql.Mutation(() => String)
  async StopScraping(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.StopScraping(args);
  }
}
