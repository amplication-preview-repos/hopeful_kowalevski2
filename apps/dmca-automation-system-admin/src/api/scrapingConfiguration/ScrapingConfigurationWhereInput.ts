import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ScrapingConfigurationWhereInput = {
  additionalParams?: JsonFilter;
  id?: StringFilter;
  platform?: StringNullableFilter;
  scrapeDepth?: IntNullableFilter;
  status?: "Option1";
  url?: StringNullableFilter;
};
