export const generateRandomString = (type, minLength, maxLength) => {
  const minCharacterLength = minLength;
  const maxCharacterLength = maxLength;
  const length =
    Math.floor(Math.random() * (maxCharacterLength - minCharacterLength + 1)) +
    minCharacterLength;

  const characters = type;
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return {
    generatedString: result,
    generatedStringLength: result.length,
  };
};
