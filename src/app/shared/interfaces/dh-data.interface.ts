/**
 * @author Bruno Ramirez
 */
export interface DhCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  isFavorite?: boolean;
}

export interface DhEpisode {
  name: string;
  episode: string;
}

export interface DhDataResponse {
  characters: APIResponse<DhCharacter[]>;
  episodes: APIResponse<DhEpisode[]>;
}

export interface APIResponse<T> {
  results: T;
}
