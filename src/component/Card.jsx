import { useState } from 'react';

export default function Card({ card }) {
  const [flip, setFlip] = useState(false);
  const lets = ['a', 'b', 'c'];
  return (
    <article
      className={`flex justify-center items-center relative rounded-2xl 
        shadow-m shadow-[0px_4px_6px_3px_rgba(221,_0,_0,_0.5)] bg-stone-200 min-w-140 w-1/2 h-60 my-4 mx-4
        transition-transform  duration-500 transform-3d perspective-distant 
        cursor-pointer hover:shadow-[0px_4px_6px_3px_rgba(221,_0,_0,_0.7)] hover:-translate-y-1
        ${flip ? 'rotate-y-180' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className='absolute p-4 backface-hidden'>
        <p className='text-center font-bold text-3xl text-stone-800 font-title'>
          {card.germanWord}
        </p>
        <ul className='mt-2 text-stone-800'>
          {card.options.map((opt, idx) => (
            <li key={idx} className='mt-1'>
              {`${lets[idx]}: ${opt}`}
            </li>
          ))}
        </ul>
      </div>
      <div className='absolute p-4 rotate-y-180 backface-hidden'>
        <p className='text-center font-bold text-xl text-stone-800'>
          {card.englishTranslation}
        </p>
      </div>
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
