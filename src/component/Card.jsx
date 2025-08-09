import { useState } from 'react';

export default function Card({ card }) {
  const [flip, setFlip] = useState(false);

  return (
    <article
      className={`flex justify-center items-center relative rounded-2xl shadow-xl shadow-red-600/35 bg-stone-50 w-120 h-60 mb-2 transition-transform duration-500 transform-3d ${flip  ? 'rotate-y-180': ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className='absolute p-4 backface-hidden'>
       <p className="text-center">{card.germanWord}</p>
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

// 14:45

// lassName={`p-2 ${count <= 0 ? 'opacity-50 pointer-events-none': 'bg-red-700'}`} 

// possible change to tailwind, but learn the js first.
// tailwind is hover. check for click. active: ...
// <article class='group h-80 max-w-80 bg-transparent perspective-midrange'>
//   <div class='relative h-full w-full text-center transition-transform duration-500 transform-3d group-hover:rotate-y-180'>

//     <section class='absolute flex h-full w-full flex-col justify-center gap-y-5 bg-blue-50 px-2 py-10 text-black backface-hidden'>
//       <h2 class='text-2xl'>{card.germanWord}</h2>
//       <ul>
//         {card.options.map((opt, idx) => <li key={idx+""+opt.length}>{opt}</li>)}
//       </ul>
//     </section>

//     <section class='absolute flex h-full w-full rotate-y-180 flex-col justify-center gap-y-5 bg-amber-950 px-2 py-10 text-white backface-hidden'>
//       <h2 class='text-2xl'>{card.englishTranslation}</h2>
//     </section>
//   </div>
// </article>
