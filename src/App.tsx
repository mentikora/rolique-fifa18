import React from 'react'
import './styles.css'
import { Logo } from './components/Logo';
import img from './img/bg_optimized.jpg';
import cx from 'classnames';

const App: React.FunctionComponent = () => {
  const [guess, changeGuess] = React.useState(true);
  return (
    <main className='App'>
      <section className="section-image">
        {guess && <div className="guess-wr">
          <p>Guess who can be on that picture</p>
          <button
            onClick={() => changeGuess(false)}
            type="button"
            className="button">I'm ready</button>
        </div>}
        <img
          src={img}
          className={cx({'filter': guess})}
          alt="winter is coming"/>
      </section>
      <section className="section-motto">
        <Logo />
        <h1>winter is coming</h1>
      </section>
    </main>
  )
};

export { App }
