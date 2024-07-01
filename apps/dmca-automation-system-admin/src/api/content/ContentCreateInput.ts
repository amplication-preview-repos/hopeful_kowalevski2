import { DmcaRequestCreateNestedManyWithoutContentsInput } from "./DmcaRequestCreateNestedManyWithoutContentsInput";
import { InputJsonValue } from "../../types";
import { LogCreateNestedManyWithoutContentsInput } from "./LogCreateNestedManyWithoutContentsInput";
import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";

export type ContentCreateInput = {
  contentType?: "Option1" | null;
  contentUrl?: string | null;
  dmcaRequests?: DmcaRequestCreateNestedManyWithoutContentsInput;
  fingerprint?: InputJsonValue;
  foundAt?: Date | null;
  logs?: LogCreateNestedManyWithoutContentsInput;
  platform?: PlatformWhereUniqueInput | null;
};
