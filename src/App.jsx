import { useState } from 'react';
// import {words} from './words.js';

import './app.css';
import Header from './component/Header.jsx'
import CardStack from './component/CardStack.jsx'


function App() {
  const [quizCards, setQuizCards] = useState(PLACEHOLDER_WORDS);

  return (
    <div >
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
      'The fear of being seen by owls',
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
      'The sudden realisation that one is the smartest individual in the room',
    ],
  },
  {
    id: 103,
    germanWord: 'Baggerspion',
    englishTranslation:
      'A person who has the urge to peek into boarded-up construction sites',
    options: [
      'A person who calls shames fellow passengers for having too much carry-on luggage',
      'A person whose underpants are visible below the shorts',
      'A person who has the urge to peek into boarded-up construction sites',
      'A person who steals coins from a fountain',
    ],
  },
];

export default App;
