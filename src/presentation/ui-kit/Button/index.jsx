import React from 'react';
import './styles.scss';

export function Button({ onClick, children }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onClick();
  };

  return (
    <button
      className="button"
      onClick={onClickHandler}
    >{children}</button>
  );
}
