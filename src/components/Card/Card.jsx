import React, { useState, useEffect } from 'react';
import * as C from '../Card/style';
import PatternDesktop from '../../assets/images/pattern-divider-desktop.svg';
import Dice from '../../assets/images/icon-dice.svg';

const Card = () => {
  const [advice, setAdvice] = useState();
  const handleClick = async () => {
    try {
      const data = await fetch('https://api.adviceslip.com/advice');
      const json = await data.json();
      setAdvice(json);
      console.log(advice);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  if (advice)
    return (
      <C.CardBg>
        <C.NumberCard>ADVICE #{advice.slip.id}</C.NumberCard>
        <C.CardQuote>{advice.slip.advice}</C.CardQuote>
        <C.CardImageDivisor src={PatternDesktop} alt={'icon decoration'} />
        <C.DiceBg onClick={handleClick}>
          <C.CardDice src={Dice} alt={'Roll the dice and get an advice.'} />
        </C.DiceBg>
      </C.CardBg>
    );
  return null;
};

export default Card;
