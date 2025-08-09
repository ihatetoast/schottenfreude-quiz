import { useState } from 'react';
// import {words} from './words.js';

import './app.css';
import Header from './component/Header.jsx'
import CardStack from './component/CardStack.jsx'


function App() {
  const [quizCards, setQuizCards] = useState(PLACEHOLDER_WORDS);

  // position: absolute;
  // width: 80%;
  // height: 90%;
  // margin: 0 auto;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);

//absolute mx-auto left-0 top-0 -translate-y-1/2 -translate-x-1/2

  return (
    <div className={ 'w-5/6 min-h-[90vh] mx-auto mt-6 py-3 px-4 bg-stone-200 '}>
      <Header title="Schottenfreude Quiz">
        <p>You've read the book, <a
          href='https://www.benschott.com/schottenfreude'
          target='_blank'
          rel='noopener noreferrer'
        >Schattenfreude: German Words for the Human Condition
        </a> by <a href='https://www.benschott.com/' rel='noopener noreferrer'> Ben Schott
        </a>, now take the quiz! </p>
      </Header>
      <main>
        <CardStack cards={quizCards} />
      </main>
    </div>
  );
}

const PLACEHOLDER_WORDS = [
  {
    id: 101,
    germanWord: 'Gastdruck',
    englishTranslation: 'The exhausting effort of being a good houseguest',
    options: [
      'The Discomfort from being too bloated',
      'The exhausting effort of being a good houseguest',
      "The need to invite someone you don't like",
    ],
  },
  {
    id: 102,
    germanWord: 'Brillenbrillanz',
    englishTranslation:
      'The sudden, innervating clarity afforded by new glasses',
    options: [
      'The sudden, innervating clarity afforded by new glasses',
      'The shine of freshly polished silverware',
      'The desire to dance when emotionally exhausted',
    ],
  },
  {
    id: 103,
    germanWord: 'Baggerspion',
    englishTranslation:
      'A person who has the urge to peek into boarded-up construction sites',
    options: [
      'A person whose underpants are visible below the shorts',
      'A person who has the urge to peek into boarded-up construction sites',
      'A person who steals coins from a fountain',
    ],
  },

  {
    id: 104,
    germanWord: 'bob',
    englishTranslation:
      'The sudden, innervating clarity afforded by new glasses',
    options: [
      'The sudden, innervating clarity afforded by new glasses',
      'The shine of freshly polished silverware',
      'The desire to dance when emotionally exhausted',
    ],
  },
  {
    id: 104,
    germanWord: 'rob',
    englishTranslation:
      'A person who has the urge to peek into boarded-up construction sites',
    options: [
      'A person whose underpants are visible below the shorts',
      'A person who has the urge to peek into boarded-up construction sites',
      'A person who steals coins from a fountain',
    ],
  },
];

export default App;
