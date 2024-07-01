import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";
import { DmcaRequestWhereUniqueInput } from "../dmcaRequest/DmcaRequestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LogWhereInput = {
  content?: ContentWhereUniqueInput;
  dmcaRequest?: DmcaRequestWhereUniqueInput;
  id?: StringFilter;
  logDate?: DateTimeNullableFilter;
  logType?: "Option1";
  message?: StringNullableFilter;
};
