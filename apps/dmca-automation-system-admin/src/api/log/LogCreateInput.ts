import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";
import { DmcaRequestWhereUniqueInput } from "../dmcaRequest/DmcaRequestWhereUniqueInput";

export type LogCreateInput = {
  content?: ContentWhereUniqueInput | null;
  dmcaRequest?: DmcaRequestWhereUniqueInput | null;
  logDate?: Date | null;
  logType?: "Option1" | null;
  message?: string | null;
};
