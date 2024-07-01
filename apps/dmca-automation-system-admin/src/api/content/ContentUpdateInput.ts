import { DmcaRequestUpdateManyWithoutContentsInput } from "./DmcaRequestUpdateManyWithoutContentsInput";
import { InputJsonValue } from "../../types";
import { LogUpdateManyWithoutContentsInput } from "./LogUpdateManyWithoutContentsInput";
import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";

export type ContentUpdateInput = {
  contentType?: "Option1" | null;
  contentUrl?: string | null;
  dmcaRequests?: DmcaRequestUpdateManyWithoutContentsInput;
  fingerprint?: InputJsonValue;
  foundAt?: Date | null;
  logs?: LogUpdateManyWithoutContentsInput;
  platform?: PlatformWhereUniqueInput | null;
};
