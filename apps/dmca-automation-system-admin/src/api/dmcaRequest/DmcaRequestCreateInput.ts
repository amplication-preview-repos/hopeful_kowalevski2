import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";
import { LogCreateNestedManyWithoutDmcaRequestsInput } from "./LogCreateNestedManyWithoutDmcaRequestsInput";

export type DmcaRequestCreateInput = {
  content?: ContentWhereUniqueInput | null;
  logs?: LogCreateNestedManyWithoutDmcaRequestsInput;
  platformContact?: string | null;
  requestDate?: Date | null;
  requestStatus?: "Option1" | null;
};
