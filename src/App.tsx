import React, {useState, useEffect} from 'react'
import PostService from './API/PostService';
import FilmContainer from './components/filmContainer/FilmContainer';
import ScrollUpButton from './UI/scrollUpButton/ScrollUpButton';
import SearchArea from './components/searchArea/SearchArea';
import InfoScreen from './UI/infoScreen/InfoScreen';
import './styles/App.css';
import {IOtion} from "./types/types";
import {IFilm} from "./types/film";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";


let offset = 0
let lastScroll = -1

function App() {
  const {setFilms, addFilms} = useActions();
  const [querry, setQuerry] = useState<string>('');
  const [select, setSelect] = useState<string>('');
  const [infoScreenVisibility, setInfoScreenVisibility] = useState<boolean>(false);
  const options: IOtion[] = [
    {
      optionName: 'Сортировка по',
      id: 'none',
      props: {
        'disabled': true,
        'default': true
      },
    },
    {
      optionName: 'Название',
      id: 'title'
    },
    {
      optionName: 'Рейтинг',
      id: 'rating'
    },
    {
      optionName: 'Год',
      id: 'year'
    }
  ]

  useEffect(() => {
    lastScroll = 0
    offset = 0
    setFilms(querry, offset, 12, !!select ? select : 'title')
  }, [querry, select])

  const handleScroll = () => {
    if (window.scrollY > lastScroll) {
      lastScroll = window.scrollY + window.screen.height
      offset++
      addFilms(querry, offset, 12,  !!select ? select : 'title')
    }
    setInfoScreenVisibility(window.scrollY > 1000)
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      <InfoScreen/>
      <SearchArea options={options} setQuerry={setQuerry} onSelect={setSelect}/>
      <ScrollUpButton isVisible={infoScreenVisibility}/>
      <FilmContainer/>
    </div>
  );
}


export default App;
