import React, {FC} from 'react';
import cl from './Select.module.css';
import {IOtion} from "../../types/types";

interface ISelect {
    options: IOtion[];
    onSelect: (arg: string) => void;
}

const Select: FC<ISelect> = ({options, onSelect}) => (
  <div className={cl.selectContainer}>
    <select
    className={cl.select}
    onChange={(e) => {
      onSelect(e.target.selectedOptions[0].id)
    }}>
      {options.map((option) => (
        <option {...option.props} id={option.id} key={option.optionName}>
          {option.optionName}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
