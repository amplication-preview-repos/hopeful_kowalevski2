import { ContentListRelationFilter } from "../content/ContentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlatformWhereInput = {
  contents?: ContentListRelationFilter;
  id?: StringFilter;
  lastScraped?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
};
