import React from 'react';
import Header from './ui-kit/components/Header/Header';
import CardPage from '../presentation/ui-kit/components/pages/CardPage';
import TablePage from '../presentation/ui-kit/components/pages/TablePage';

import './assets/global.scss';

const App = () => (
  <>
    <Header></Header>
    <CardPage></CardPage>
    <TablePage></TablePage>
  </>
);

export { App };
