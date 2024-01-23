import {Episode} from "./episodes";

export interface EpisodeResults {
  info?: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Episode[];
}
