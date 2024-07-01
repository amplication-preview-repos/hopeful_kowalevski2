import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "contentUrl";

export const ContentTitle = (record: TContent): string => {
  return record.contentUrl?.toString() || String(record.id);
};
