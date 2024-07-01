import { ContentCreateNestedManyWithoutPlatformsInput } from "./ContentCreateNestedManyWithoutPlatformsInput";

export type PlatformCreateInput = {
  contents?: ContentCreateNestedManyWithoutPlatformsInput;
  lastScraped?: Date | null;
  name?: string | null;
  url?: string | null;
};
