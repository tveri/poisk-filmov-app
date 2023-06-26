import React, {FC} from 'react';
import cl from './FilmDescription.module.css';
import {IFilm} from "../../types/film";


interface IFilmDescription {
  film: IFilm;
}

const FilmDescription: FC<IFilmDescription> = ({film}) => (
  <div className={cl.filmDescriptionContainer}>
    <img className={cl.filmPreview} src={film.data.posterUrlPreview} alt=''/>
    <div className={cl.filmDescrpContainer}>
      <div className={cl.filmDescrpContainerTop}>
        <div className={cl.filmTitleContainer}>
          <h2 className={cl.filmTitle}>{film.data.nameRu}</h2>
          <h2 className={cl.filmTitleEn}>{film.data.nameEn}</h2>
        </div>
        <h1 className={cl.filmParam}>
        <span>Режиссеры: </span>
        <span className={cl.filmParams}>{film.data.directors.map((director) => (director)).join(', ')}</span>
        </h1>
        <h1 className={cl.filmParam}>
        <span>Год выпуска: </span>
        <span className={cl.filmParams}>{film.data.year}</span>
        </h1>
        <h1 className={cl.filmParam}>
          <span>Жанр: </span>
          <span className={cl.filmParams}>{film.data.genres.map(({genre}) => (genre)).join(', ')}</span>
        </h1>
      </div>
      <div className={cl.filmDescrpContainerBottom}>
        <h1 className={cl.filmRating}>★ {film.rating.rating}</h1>
      </div>
    </div>

    <h1 className={cl.filmDescription}>{film.data.description}</h1>

  </div>
);

export default FilmDescription;
