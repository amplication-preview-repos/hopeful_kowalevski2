import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConfigurationWhereInput = {
  configName?: StringNullableFilter;
  configValue?: StringNullableFilter;
  id?: StringFilter;
};
