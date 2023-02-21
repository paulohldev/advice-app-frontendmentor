import styled from 'styled-components';

export const CardBg = styled.div`
  background-color: var(--dark-grayish-blue);
  width: 400px;
  height: 250px;
  border-radius: 8px;
  text-align: center;
  padding: 30px;
  position: relative;
  min-width: 200px;
  @media screen and (max-width: 400px) {
    height: 270px;
  }
`;

export const NumberCard = styled.span`
  font-size: 0.875rem;
  color: var(--neon-green);
  letter-spacing: 3px;
`;

export const CardQuote = styled.q`
  display: block;
  padding-top: 20px;
  color: var(--light-cyan);
  font-size: 1.3125rem;
  line-height: 1.4;
`;

export const CardImageDivisor = styled.img`
  padding-top: 20px;
`;

export const DiceBg = styled.div`
  position: absolute;
  bottom: -25px;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;
  width: fit-content;
  padding: 15px;
  border-radius: 50%;
  background-color: var(--neon-green);
  &:hover {
    box-shadow: 0 0 25px var(--neon-green);
  }
`;

export const CardDice = styled.img`
  width: 20px;
`;
