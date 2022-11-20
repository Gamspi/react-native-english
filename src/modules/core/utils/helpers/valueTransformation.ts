export function valueTransformation(value: string) {
  return value.toLowerCase().trim();
}
export function arrayValueTransformation(value: string[]) {
  return value.reduce((acc, str) => {
    str = str.toLowerCase().trim();
    return str ? [...acc, str] : acc;
  }, [] as string[]);
}
