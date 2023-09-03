export function countdown(
  seconds: number,
  callback: (remainingSeconds: number) => void
) {
  let remainingSeconds = seconds;

  const intervalId = setInterval(() => {
    if (remainingSeconds > 0) {
      callback(remainingSeconds);
      remainingSeconds--;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}
