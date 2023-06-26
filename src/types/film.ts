


interface ICountry {
  country: string;
}

interface IGenre {
  genre: string;
}

interface IData {
  filmId: number;
  nameRu: string;
  nameEn: string;
  webUrl: string;
  posterUrl: string;
  posterUrlPreview: string;
  year: string;
  filmLength: string | null;
  slogan: string | null;
  description: string;
  type: string;
  ratingMpaa: string | null;
  ratingAgeLimits: string | null;
  premiereRu: string | null;
  distributors: string | null;
  premiereWorld: string;
  premiereDigital: string | null;
  premiereWorldCountry: string | null;
  premiereDvd: string | null;
  premiereBluRay: string | null;
  distributorRelease: string | null;
  countries: ICountry[];
  genres: IGenre[];
  facts: string[];
  seasons: string[];
  directors: string[];
}

interface IExternalId {
  imdbId: string;
}

interface IRating {
  rating: number;
  ratingVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number | null;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: string;
  ratingAwaitCount: number;
  ratingRfCritics: string;
  ratingRfCriticsVoteCount: number;
}

interface IBudget {
  grossRu: number | null;
  grossUsa: number | null;
  grossWorld: number | null;
  budget: number | null;
  marketing: number | null;
}

interface IReview {
  reviewsCount: number;
  ratingGoodReview: string;
  ratingGoodReviewVoteCount: number;
}

interface IPoster {
  language: string | null;
  url: string;
  height: number;
  width: number;
}

interface IBackdrop {
  language: string | null;
  url: string;
  height: number;
  width: number;
}

interface IImages {
  posters: IPoster[];
  backdrops: IBackdrop[];
}

export interface IFilm {
  data: IData;
  externalId: IExternalId;
  rating: IRating;
  budget: IBudget;
  review: IReview;
  images: IImages;
  imdb: string;
}

export interface FilmsState {
  films: IFilm[]
}

export enum FilmsActionTypes {
  SET_FILMS = 'SET_FILMS',
  ADD_FILMS = 'ADD_FILMS'
}

interface SetFilmsAction {
  type: FilmsActionTypes.SET_FILMS;
  payload: IFilm[];
}

interface AddFilmsAction {
  type: FilmsActionTypes.ADD_FILMS;
  payload: IFilm[];
}

export type FilmsAction = SetFilmsAction | AddFilmsAction