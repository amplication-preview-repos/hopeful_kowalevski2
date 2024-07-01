import { Platform as TPlatform } from "../api/platform/Platform";

export const PLATFORM_TITLE_FIELD = "name";

export const PlatformTitle = (record: TPlatform): string => {
  return record.name?.toString() || String(record.id);
};
