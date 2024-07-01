import { JsonValue } from "type-fest";

export type ScrapingConfiguration = {
  additionalParams: JsonValue;
  createdAt: Date;
  id: string;
  platform: string | null;
  scrapeDepth: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
  url: string | null;
};
