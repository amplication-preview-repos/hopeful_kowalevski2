import { DmcaRequestWhereInput } from "./DmcaRequestWhereInput";
import { DmcaRequestOrderByInput } from "./DmcaRequestOrderByInput";

export type DmcaRequestFindManyArgs = {
  where?: DmcaRequestWhereInput;
  orderBy?: Array<DmcaRequestOrderByInput>;
  skip?: number;
  take?: number;
};
