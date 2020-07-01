import { TranslateFunction } from 'core-package';

const mock: TranslateFunction = (
  phrase: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...replace: string[]
): string => phrase;

export default mock;
