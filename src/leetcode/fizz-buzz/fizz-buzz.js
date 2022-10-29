/**
* Leetcode #412
* Difficulty: Easy
* https://leetcode.com/problems/fizz-buzz/
*/
export const fizzBuzz = n => {
    let result = [];
    
    const isDivisible = n => {
        let result = '';
        const lastNumber = n % 10

        if (n % 3 === 0) {
            result += 'Fizz'
        }
        if (lastNumber === 0 || lastNumber === 5) {
            result += 'Buzz'
        }

        return result;
    }
    
    for (let i = 1; i <= n; i += 1) {
        let number = i.toString();
        result.push(isDivisible(number) || number);
    }

    return result;
};