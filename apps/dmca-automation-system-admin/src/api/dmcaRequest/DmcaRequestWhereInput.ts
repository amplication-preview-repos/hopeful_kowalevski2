import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LogListRelationFilter } from "../log/LogListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DmcaRequestWhereInput = {
  content?: ContentWhereUniqueInput;
  id?: StringFilter;
  logs?: LogListRelationFilter;
  platformContact?: StringNullableFilter;
  requestDate?: DateTimeNullableFilter;
  requestStatus?: "Option1";
};
