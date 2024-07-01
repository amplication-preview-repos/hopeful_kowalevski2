import { Content } from "../content/Content";
import { Log } from "../log/Log";

export type DmcaRequest = {
  content?: Content | null;
  createdAt: Date;
  id: string;
  logs?: Array<Log>;
  platformContact: string | null;
  requestDate: Date | null;
  requestStatus?: "Option1" | null;
  updatedAt: Date;
};
