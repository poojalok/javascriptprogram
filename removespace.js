const removeSpaces = inputString => inputString.replace(/\s/g, '');

// Example usage:
const originalString = 'hello vinsys ';

const stringWithoutSpaces = removeSpaces(originalString);

console.log(`Original String: ${originalString}`);
console.log(`String without Spaces: ${stringWithoutSpaces}`);
