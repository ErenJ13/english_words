import React, { useState, useEffect } from 'react';
import words from '../data/table_word.json';
import TableHead from '../Table/TableHead';
import TableWord from '../Table/Table';
import '../Table/table.scss';

export default function TablePage() {
  const [wordsTable, setWords] = useState([]);

  useEffect(() => {
    setWords(words);
  }, []);
  return (
    <table className="tableFlex">
      <TableHead></TableHead>
      {wordsTable.map((word) => (
        <TableWord
          key={word.id}
          theme={word.theme}
          eng={word.english}
          rus={word.russian}
        ></TableWord>
      ))}
    </table>
  );
}
