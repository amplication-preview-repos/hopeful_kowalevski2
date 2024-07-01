import { DmcaRequest } from "../dmcaRequest/DmcaRequest";
import { JsonValue } from "type-fest";
import { Log } from "../log/Log";
import { Platform } from "../platform/Platform";

export type Content = {
  contentType?: "Option1" | null;
  contentUrl: string | null;
  createdAt: Date;
  dmcaRequests?: Array<DmcaRequest>;
  fingerprint: JsonValue;
  foundAt: Date | null;
  id: string;
  logs?: Array<Log>;
  platform?: Platform | null;
  updatedAt: Date;
};
