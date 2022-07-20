export const bindJSON = <T>(json: string): T => {
  const j: string = JSON.parse(json);

  return new Object(j) as T;
}

export const toJSON = <T>(json: T): string => {
  const j: string = JSON.stringify(json);

  return j;
}