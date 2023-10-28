import React, { useState, useEffect } from 'react';
import card_word from '../data/card_word.json';
import Card from '../Card/Card';
import '../Card/card.scss';

export default function CardPage() {
  const [gameCards, setGame] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setGame(card_word);
  }, []);

  if (!gameCards) {
    return <h1>Loading</h1>;
  }

  function hadleClickPrev() {
    if (count !== 0) {
      setCount(count - 1);
    } else if (count < card_word.length) {
      setCount(card_word.length - 1);
    }
  }
  function hadleClickNext() {
    if (count !== card_word.length - 1) {
      setCount(count + 1);
    } else if (count >= card_word.length - 1) {
      setCount(0);
    }
  }

  return (
    <div className="gameFlex">
      <button className="buttonWord1" onClick={hadleClickPrev}></button>
      <Card item={gameCards[count]}></Card>
      <button className="buttonWord2" onClick={hadleClickNext}></button>
    </div>
  );
}
