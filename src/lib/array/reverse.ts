export default function (values: any[]): any[] {
  const result: any[] = [];

  for (let i = values.length - 1; i >= 0; i--) {
    result.push(values[i]);
  }

  return result;
}
