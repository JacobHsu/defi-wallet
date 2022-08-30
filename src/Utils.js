export const mask = (
  originString,
  startRetain = 1,
  endRetain = 1,
  mask = '*'
) => {
  const reg = new RegExp(`(?<=.{${startRetain}}).{1}(?=.{${endRetain}})`, 'g');
  return originString.substring(3).replace(reg, mask);
};
