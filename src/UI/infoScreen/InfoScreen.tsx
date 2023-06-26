import React, {FC} from 'react';
import cl from './InfoScreen.module.css';
import FilmDescription from "../../components/filmDescription/FilmDescription";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const InfoScreen: FC = () => {
  const {film} = useTypedSelector(state => state.infoScreenContent)
  const {removeInfoScreenContent} = useActions();

  return(
  <div
    id='infoscreen'
    className={!!film ? cl.infoScreenContainerVisible : cl.infoScreenContainerHidden}
    onClick={((e) => {
      if (e.currentTarget.id === 'infoscreen') {
        removeInfoScreenContent()
      }
    })}>
    <div className={!!film ? cl.infoScreen : cl.infoScreenHidden}>
        {!!film ? <FilmDescription film={film}/> : ''}
    </div>
  </div>
)};

export default InfoScreen;
