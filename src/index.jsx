import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './presentation/ui-kit/Button';
import './assets/global.scss';

function onButtonClick() {
  console.log('Нажато');
}

const root = createRoot(document.getElementById('app'));
root.render(<Button onClick={onButtonClick}>Кнопка React</Button>);
