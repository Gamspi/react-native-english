import {useEffect, useState} from 'react';
export const useController = () => {
  const INIT_COLOR_ARR = [39, 43, 47];
  const [idInterval, setIdInterval] = useState<null | number>(null);
  const [leftColor, setLeftColor] = useState<number[]>(INIT_COLOR_ARR);
  useEffect(() => {
    if (!leftColor.filter(elem => elem <= 100).length && idInterval) {
      clearInterval(idInterval);
    }
  }, [idInterval, leftColor]);

  const handelOnFocus = () => {
    const interval = setInterval(() => {
      setLeftColor(prev => prev.map(n => (n < 100 ? n + 2 : n)));
    }, 10);
    setIdInterval(interval);
  };

  const handlerOnBlur = () => {
    if (idInterval) {
      console.log(leftColor);
      clearInterval(idInterval);
      setLeftColor(INIT_COLOR_ARR);
    }
  };
  return {
    leftColor,
    handelOnFocus,
    handlerOnBlur,
  };
};
