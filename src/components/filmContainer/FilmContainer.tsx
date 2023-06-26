import React, {FC} from 'react';
import Film from '../film/Film';
import cl from './FilmContainer.module.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";


const FilmContainer: FC = () => {
  const {films} = useTypedSelector(state => state.films)

  return (
    <div className={cl.filmsContainer}>
      {films?.map((film) => (
        <Film film={film} key={film.data.filmId}/>
      ))}
    </div>
  )
};

export default FilmContainer;
