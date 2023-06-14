import { useCallback, useState } from "react";

const useCounter = (): [number, (increaseBy: number) => void] => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = useCallback((increaseBy: number) => {
    setCounter((count) => count + increaseBy);
  }, []);

  return [counter, increaseCounter];
};
export { useCounter };
