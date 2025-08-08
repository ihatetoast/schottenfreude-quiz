import { useState } from 'react';

export default function Card({ card }) {
  const [flip, setFlip] = useState(false);

  return (
    <article
      className={`flex justify-center relative items-center rounded-2xl shadow-xl shadow-red-600/35 bg-stone-200 w-60 h-60 transition-transform duration-500 transform-3d ${flip  ? 'rotate-y-180': ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className='absolute p-4 backface-hidden'>
        {card.germanWord}
        <ul>
          {card.options.map((opt, idx) => (
            <li key={idx}>{opt}</li>
          ))}
        </ul>
      </div>
      <div className='absolute p-4 rotate-y-180 backface-hidden'>{card.englishTranslation}</div>
    </article>
  );
}


