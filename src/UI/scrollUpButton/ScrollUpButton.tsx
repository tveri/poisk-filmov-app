import React, {FC} from 'react';
import cl from './ScrollUpButton.module.css';

interface IScrollUpButton {
  isVisible: boolean;
}

const ScrollUpButton: FC<IScrollUpButton> = ({isVisible}) => (
  <div className={cl.scrollUpButtonContainer}>
      <div
          onClick={() => {window.scrollTo(0,0)}}
          className={
            isVisible
            ?
            cl.scrollUpButton
            :
            cl.scrollUpButtonHidden
            }>
        ➜
      </div>
  </div>
);

export default ScrollUpButton;
