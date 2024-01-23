import {Character} from "./characters";

export interface CharacterResults{
  info: {
    count:number;
    pages:number;
    next:string;
    prev:string;
  };

  results:Character[];
}
