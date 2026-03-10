import { isEven, isOdd, isPrime } from "./lib/math";

export const actions = [
  {
    elId: "actionIsEven",
    handler: (value) => {
      console.log(`Value ${value} even: ${isEven(value)}`);
    },
  },
  {
    elId: "actionIsOdd",
    handler: (value) => {
      console.log(`Value ${value} odd: ${isOdd(value)}`);
    },
  },
  {
    elId: "actionIsPrime",
    handler: (value) => {
      console.log(`Value ${value} prime: ${isPrime(value)}`);
    },
  },
] as { elId: string; handler: (value: number) => void }[];
