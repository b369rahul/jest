import { useCounter } from "../hooks/useCounter";
import { getSystemTimezone } from "../utils/getSystemTimezone";

export const Counter = ({
  onCounterUpdate,
}: {
  onCounterUpdate?: () => void;
}) => {
  const [counter, updateCounter] = useCounter();
  console.log(counter, updateCounter, getSystemTimezone());
  return (
    <>
      <div>{counter}</div>
      <button
        role="button"
        data-testid="counter-button"
        onClick={() => {
          console.log("this is called");
          updateCounter(2);
          onCounterUpdate?.();
        }}
      >
        Increase By Two
      </button>
    </>
  );
};
