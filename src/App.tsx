import React from 'react'
import './styles.css'
import { Fifa } from './components/Fifa';
import { CSGO } from './components/CSGO';

const App: React.FunctionComponent = () => {
  return (
    <main className='App'>
      <Fifa />
      <CSGO />
    </main>
  )
};

export { App }
