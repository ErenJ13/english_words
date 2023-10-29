import React, { useEffect, useState } from 'react';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    editWords = { id, theme, eng, rus };
  }

  return (
    <tbody>
      {!isEditMode ? (
        <tr className="wordTable">
          <td>{valueTheme}</td>
          <td>{valueEng}</td>
          <td>{valueRus}</td>
          <td>
            <button className="pen" onClick={handleClick}></button>
          </td>
        </tr>
      ) : (
        <tr className="wordTable">
          <input type="text" value={valueTheme} onChange={handleTheme} />
          <input type="text" value={valueEng} onChange={handleEng} />
          <input type="text" value={valueRus} onChange={handleRus} />
          <td>
            <button className="save" onClick={saveWords}></button>
            <button className="delete" onClick={handleClick}></button>
          </td>
        </tr>
      )}
    </tbody>
  );
}
