import React from 'react';
import { useState } from 'react';

export default function Card({ item }) {
  const [isChecked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <div className="cardGame">
        {isChecked ? (
          <div>
            <p>{item.name}</p>
            <p>{item.translate}</p>
          </div>
        ) : (
          <div className="button">
            <p>{item.name}</p>
            <button onClick={handleClick}>Перевод</button>
          </div>
        )}
      </div>
    </>
  );
}
