import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";
import { LogUpdateManyWithoutDmcaRequestsInput } from "./LogUpdateManyWithoutDmcaRequestsInput";

export type DmcaRequestUpdateInput = {
  content?: ContentWhereUniqueInput | null;
  logs?: LogUpdateManyWithoutDmcaRequestsInput;
  platformContact?: string | null;
  requestDate?: Date | null;
  requestStatus?: "Option1" | null;
};
