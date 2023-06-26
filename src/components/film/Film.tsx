import React, {FC} from 'react';
import classes from './Film.module.css';
import {IFilm} from "../../types/film";
import {useActions} from "../../hooks/useActions";


interface IFilmComponent {
  film: IFilm;
}

const Film: FC<IFilmComponent> = ({film}) => {
  const {setInfoScreenContent} = useActions();

  return (
      <div className={classes.filmContainer}>
        <img
            className={classes.filmPreview}
            src={film.data.posterUrlPreview}
            alt=''
            onClick={() => {
              setInfoScreenContent(film)
            }} />
        <div className={classes.filmDescrpContainer}>
          <div className={classes.filmTextContainer}>
            <h1 className={classes.filmTitle}>{film.data.nameRu} <span className={classes.filmYear}>({film.data.year})</span></h1>
            <h2 className={classes.filmAuthor}>{film.data.directors.join(', ')}</h2>
          </div>
          <div className={classes.filmBottom}>
            <h2 className={classes.filmRating}>★ {film.rating.rating}</h2>
            <div className={classes.filmButtonsContainer}>
              <button
                  className={classes.filmButtonKP}
                  onClick={() => {
                    window.open(film.data.webUrl)
                  }}>КиноПоиск</button>
              <button
                  className={classes.filmButtonIMDB}
                  onClick={() => {
                    window.open('https://www.imdb.com/title/tt' + film.imdb)
                  }}
              >IMDB</button>
            </div>
          </div>
        </div>
      </div>
  )};


export default Film;
