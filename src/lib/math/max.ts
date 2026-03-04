export default function max(...values: number[]): number {
  if (values.length > 0) {
    let result = values[0];

    for (let i = 1; i < values.length; i++) {
      if (result < values[i]) {
        result = values[i];
      }
    }

    return result;
  } else {
    return NaN;
  }
}
