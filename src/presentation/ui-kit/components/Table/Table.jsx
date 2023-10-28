import React, { useEffect } from 'react';
import { useState } from 'react';

export default function TableWord(words, editWords) {
  const { id, theme, eng, rus } = words;
  const [isEditMode, setIsEditMode] = useState(false);
  const [valueTheme, setValueTheme] = useState('');
  const [valueEng, setValueEng] = useState('');
  const [valueRus, setValueRus] = useState('');
  const handleClick = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    setValueTheme(theme);
    setValueEng(eng);
    setValueRus(rus);
  }, [words]);

  function handleTheme(e) {
    setValueTheme(e.target.value);
  }
  function handleEng(e) {
    setValueEng(e.target.value);
  }
  function handleRus(e) {
    setValueRus(e.target.value);
  }
  function saveWords() {
    setIsEditMode(!isEditMode);
    editWords(id, theme, eng, rus);
  }

  return (
    <div>
      {!isEditMode ? (
        <div className="wordTable">
          <p>{valueTheme}</p>
          <p>{valueEng}</p>
          <p>{valueRus}</p>
          <div>
            <button className="pen" onClick={handleClick}></button>
          </div>
        </div>
      ) : (
        <div className="wordTable">
          <input type="text" value={valueTheme} onChange={handleTheme} />
          <input type="text" value={valueEng} onChange={handleEng} />
          <input type="text" value={valueRus} onChange={handleRus} />
          <div>
            <button className="save" onClick={saveWords}></button>
            <button className="delete" onClick={handleClick}></button>
          </div>
        </div>
      )}
    </div>
  );
}
