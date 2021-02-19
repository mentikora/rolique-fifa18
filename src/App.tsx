import React from 'react'

import { Logo } from './components/Logo';

import img1 from './img/q.jpg';
import img2 from './img/w.jpg';
import img3 from './img/e.jpg';
import img4 from './img/r.jpg';
import img5 from './img/y.jpg';
import img6 from './img/u.jpg';
import img7 from './img/i.jpg';
import img8 from './img/o.jpg';
import img9 from './img/p.jpg';
import img10 from './img/t.jpg';
import './styles.css'

const App: React.FunctionComponent = () => {
  const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <main className='App'>
      <section className="section first">
        <Logo />
      </section>
      {
        img.map((e, i) => <section className="section" key={i}><img loading="lazy" className={`z-${i}`} src={e} alt="fifa"/></section>)
      }
    </main>
  )
};

export { App }
