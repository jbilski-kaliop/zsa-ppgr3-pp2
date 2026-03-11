import {
  isEven,
  isOdd,
  isPrime,
  min,
  max,
  findPrimesInRange,
} from "./lib/math";

export const actions = [
  {
    elId: "actionIsEven",
    handler: (values) => {
      const value = values.pop() ?? 0;
      console.log(`Value ${value} even: ${isEven(value)}`);
    },
    valuesCount: 1,
  },
  {
    elId: "actionIsOdd",
    handler: (values) => {
      const value = values.pop() ?? 0;
      console.log(`Value ${value} odd: ${isOdd(value)}`);
    },
    valuesCount: 1,
  },
  {
    elId: "actionIsPrime",
    handler: (values) => {
      const value = values.pop() ?? 0;
      console.log(`Value ${value} prime: ${isPrime(value)}`);
    },
    valuesCount: 1,
  },
  {
    elId: "actionFindMin",
    handler: (values) => {
      console.log(`Min value from: ${values.join(", ")} is: ${min(...values)}`);
    },
    valuesCount: 2,
  },
  {
    elId: "actionFindMax",
    handler: (values) => {
      console.log(`Max value from: ${values.join(", ")} is: ${max(...values)}`);
    },
    valuesCount: 2,
  },
  {
    elId: "actionFindPrimesInRange",
    handler: (values) => {
      console.log(
        `Primes found in range of: ${values.join(", ")} are: ${findPrimesInRange(values[0], values[1]).join(", ")}`,
      );
    },
    valuesCount: 2,
  },
] as {
  elId: string;
  handler: (values: number[]) => void;
  valuesCount: number;
}[];
