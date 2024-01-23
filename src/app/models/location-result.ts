
import { Location } from "./locations";

export interface LocationResults {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Location[];
}
