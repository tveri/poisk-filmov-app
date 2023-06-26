import React, {FC} from 'react';
import cl from './SearchArea.module.css';
import SearchBar from '../searchBar/SearchBar';
import Select from '../../UI/select/Select';
import {IOtion} from "../../types/types";

interface ISearchArea {
    options: IOtion[];
    setQuerry: (arg: string) => void;
    onSelect: (arg: string) => void;
}

const SearchArea: FC<ISearchArea> = ({options, setQuerry, onSelect}) => (
  <div className={cl.searchAreaContainer}>
    <Select options={options} onSelect={onSelect}/>
    <SearchBar setQuerry={setQuerry}/>
  </div>
);

export default SearchArea;
