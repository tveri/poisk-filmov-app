import React, {FC, useState} from 'react';
import classes from './SearchBar.module.css';

interface ISearchBar {
    setQuerry: (arg: string) => void;
}

const SearchBar: FC<ISearchBar> = ({setQuerry}) => {
  const [value, setValue] = useState('');
  return (
    <div className={classes.searchBarContainer}>
      <input
        className={classes.searchBar}
        placeholder='Поиск...'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setQuerry(e.target.value);
        }} />
    </div>
  );
};

export default SearchBar;
