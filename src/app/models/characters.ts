export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;

  };
  location: {
    name: string;
    url: string;

  }
  image: string;
  episode: string;
  ulr: string;
  created: string;
}
