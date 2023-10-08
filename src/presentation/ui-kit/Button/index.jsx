import React from 'react';
import './styles.scs';

export function Button({ onClick, children }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onClick();
  };

  return (
    <button className="button" onClick={onClickHandler}>
      {children}
    </button>
  );
}
