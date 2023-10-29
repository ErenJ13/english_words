import React, { useState } from 'react';

export default function Card() {
  const [isChecked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="cardGame">
      {isChecked ? (
        <div>
          <p>Cat</p>
          <p>Кот</p>
        </div>
      ) : (
        <div className="button">
          <p>Cat</p>
          <p>
            <button onClick={handleClick}>Перевод</button>
          </p>
        </div>
      )}
    </div>
  );
}
