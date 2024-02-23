const calculate = numbers => {
    
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
};

const numbersArray = [11, 12, 13, 14, 15];

const result = calculate(numbersArray);

console.log(`Sum of numbers: ${result}`);
