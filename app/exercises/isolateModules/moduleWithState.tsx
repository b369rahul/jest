import moment from "moment";

console.log(new Date().getTime());

let counter = 1;
export const set = (i: number) => {
  counter = i;
};

export const increment = () => {
  counter += 1;
};

export const getState = () => counter;
