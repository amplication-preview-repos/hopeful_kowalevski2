import { ContentUpdateManyWithoutPlatformsInput } from "./ContentUpdateManyWithoutPlatformsInput";

export type PlatformUpdateInput = {
  contents?: ContentUpdateManyWithoutPlatformsInput;
  lastScraped?: Date | null;
  name?: string | null;
  url?: string | null;
};
