export const normalize = (inputArray) => {
  let concatenatedString = "";
  for (let i = 0; i < inputArray.length; i++) {
    concatenatedString += inputArray[i] + ", ";
  }
  concatenatedString = concatenatedString.slice(
    0,
    concatenatedString.length - 2
  );
  return concatenatedString;
};
