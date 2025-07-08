'use client';

import { ArrowUpIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
const isAtBottom = scrollProgress >= 100;

  return (
    <div className={`!fixed bottom-6 right-6 h-14 w-14 bg-white border-none outline-none z-50  rounded-full shadow-md  ${isAtBottom && ' !bg-extra-dark-orange'}`}>
      <CircularProgressbar
        value={scrollProgress}
        text={`${Math.round(scrollProgress)}%`}
        styles={buildStyles({
          pathColor: '#ff9f1c', // bright green like your image
          textColor: '#f3500f',
          // trailColor: '#f3f3f3',
          textSize: '20px',
          // strokeLinecap: 'butt',
        })}
      />
      {isAtBottom && (
        <button
          onClick={scrollToTop}
          className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full bg-transparent pointer-events-auto"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className='text-white text-2xl'/>
        </button>
      )}
    </div>
  );
}
