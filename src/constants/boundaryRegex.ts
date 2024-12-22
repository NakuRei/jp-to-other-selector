export const boundaryRegex = new RegExp(
  '[\\p{Script=Hiragana}。、\\p{Script=Katakana}ー\\p{Script=Han}]+'
  + '|[\\p{Script=Latin}\\p{Script=Cyrillic}\\p{Script=Arabic}\\w]+',
  'gu',
);
