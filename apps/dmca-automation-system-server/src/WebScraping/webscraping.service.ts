import { Injectable } from "@nestjs/common";
import { ScrapePlatformInput } from "../webScraping/ScrapePlatformInput";
import { StartScrapingInput } from "../webScraping/StartScrapingInput";

@Injectable()
export class WebScrapingService {
  constructor() {}
  async FetchScrapingStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ScrapePlatform(args: ScrapePlatformInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async StartScraping(args: StartScrapingInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async StopScraping(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
