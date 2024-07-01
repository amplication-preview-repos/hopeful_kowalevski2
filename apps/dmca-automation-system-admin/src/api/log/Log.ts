import { Content } from "../content/Content";
import { DmcaRequest } from "../dmcaRequest/DmcaRequest";

export type Log = {
  content?: Content | null;
  createdAt: Date;
  dmcaRequest?: DmcaRequest | null;
  id: string;
  logDate: Date | null;
  logType?: "Option1" | null;
  message: string | null;
  updatedAt: Date;
};
