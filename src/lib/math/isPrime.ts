import max from "./max";
import min from "./min";

export function isPrime(value: number): boolean {
  if (value < 2) {
    return false;
  }
  if (!Number.isInteger(value)) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}

export function findPrimesInRange(val1: number, val2: number): number[] {
  const result: number[] = [];
  const minVal: number = min(val1, val2);
  const maxVal: number = max(val1, val2);

  for (let i = minVal; i <= maxVal; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}
