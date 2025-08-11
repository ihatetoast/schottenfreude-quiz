import { useState } from 'react';
import { WORDS } from './words.js';

import './app.css';
import Header from './component/Header.jsx';
import CardStack from './component/CardStack.jsx';

function App() {
  const [quizCards, setQuizCards] = useState(WORDS);
  // to-do: give option to have short, med, long, or all length words
  // to-do-deux: right now it's just a test-yourself flashcard, not quiz.
  // add ability to click on an option and see if it's right.

  // build the list. get at least 100. if you have time to binge tv, you have time to do this
  return (
    <div className={'w-5/6 min-h-[90vh] mx-auto mt-6 py-3 px-4 bg-stone-50 '}>
      <Header
        title='Schottenfreude Quiz'
        headerClass='my-6'
        titleClass='text-center text-6xl my-3 font-title'
      >
        <div className="font-body px-30 text-lg">
          <p>
            There is a terrific book, 
            <a
              href='https://www.benschott.com/schottenfreude'
              target='_blank'
              rel='noopener noreferrer'
            >Schattenfreude: German Words for the Human Condition</a> by 
            <a href='https://www.benschott.com/' rel='noopener noreferrer'>Ben Schott</a>, that lists some fantastic words that exist only in German.
            Think you can guess what these words really mean? Check out the flashcards below.</p>

          

        </div>
      </Header>
      <main className='font-body'>
        <CardStack cards={quizCards} />
      </main>
    </div>
  );
}

export default App;
