import React, { useEffect, useState } from 'react';
import quote from '../data/quote';
import Logo from '../images/logo.svg';
import leftIcons from '../images/left-icons.svg';
import rightIcons from '../images/right-icons.svg';
import IntroImage from '../images/introImage.png';

const Intro = () => {
  const [loadingValue, setLoadingValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (loadingValue < 95) {
        setLoadingValue(loadingValue + 0.2);
      }
    }, 4);
    return () => clearInterval(intervalId);
  }, [loadingValue]);

  return (
    <div className="flex justify-around items-stretch h-screen w-screen theme-background">

      <div className="hidden md:flex flex-shrink-0 justify-center items-center wow slideInLeft">
        <img src={leftIcons} alt="website logo" style={{ width: '32px' }} />
      </div>

      <div className="flex flex-shrink-0 flex-col max-w-sm justify-center mx-0 w-64 sm:w-full">
        <img src={Logo} alt="website logo" className="mb-5  mx-auto w-full" />
        <img src={IntroImage} alt="website logo" className="max-w-md mx-auto w-full" />
        <div className="shadow-md w-full bg-transparent mt-5 rounded-ful max-w-xs mx-auto">
          <div
            className="bg-blue text-xs leading-none py-1 text-center text-white h-1 rounded-full"
            style={{ width: `${loadingValue}%`, backgroundColor: 'white' }}
          />
        </div>
        <p className="mt-5 text-white text-center w-full wow fadeInUp">
          “
          {quote.quote}
          . ”
        </p>
        <p className="mt-2 text-white text-center w-full font-bold">
          --
          {quote.who}
        </p>
      </div>

      <div className="hidden md:flex flex-shrink-0 justify-center items-center">
        <img src={rightIcons} alt="website logo" style={{ width: '32px' }} />
      </div>

    </div>
  );
};

export default Intro;
