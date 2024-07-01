import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DmcaRequestListRelationFilter } from "../dmcaRequest/DmcaRequestListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LogListRelationFilter } from "../log/LogListRelationFilter";
import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";

export type ContentWhereInput = {
  contentType?: "Option1";
  contentUrl?: StringNullableFilter;
  dmcaRequests?: DmcaRequestListRelationFilter;
  fingerprint?: JsonFilter;
  foundAt?: DateTimeNullableFilter;
  id?: StringFilter;
  logs?: LogListRelationFilter;
  platform?: PlatformWhereUniqueInput;
};
