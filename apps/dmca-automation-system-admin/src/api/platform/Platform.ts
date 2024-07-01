import { Content } from "../content/Content";

export type Platform = {
  contents?: Array<Content>;
  createdAt: Date;
  id: string;
  lastScraped: Date | null;
  name: string | null;
  updatedAt: Date;
  url: string | null;
};
