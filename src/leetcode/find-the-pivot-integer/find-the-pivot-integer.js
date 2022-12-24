/**
* Leetcode #2485
* Difficulty: Easy
* https://leetcode.com/problems/find-the-pivot-integer/
*/
export const findThePivotInteger = n => {
    let summFirst = 0;
    let summLast = 0;
    let result = -1;

    for (let i = 1, j = n; i <= j;) {
        if (summFirst === summLast && i === j) {
            return i;
        }

        if (summFirst + i <= summLast) {
            while (summFirst + i <= summLast) {
                summFirst += i;
                i += 1;
            }
        } else {
            summLast += j;
            j -= 1;
        }
    }

    return result;
};