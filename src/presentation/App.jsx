import React from 'react';
import { Button } from './ui-kit/Button';
import './assets/global.scss';

function onButtonClick() {
  console.log('Нажато');
}

const App = () => (
  <React.StrictMode>
    <Button onClick={onButtonClick}>Кнопка</Button>
  </React.StrictMode>
);

export { App };
