/**
* Leetcode #1491
* Difficulty: Easy
* https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
*/
export const averageSalaryExcludingTheMinimumAndMaximumSalary = salary => {
    const map = new Map();
    let min = +Infinity;
    let max = -Infinity;
    let summ = 0;
    let counter = salary.length;

    for (let ammount of salary) {
        min = Math.min(min, ammount);
        max = Math.max(max, ammount);
        summ += ammount;
        map.set(ammount, (map.get(ammount) ?? 0) + 1);
    }

    const minus = (value, count) => {
        for (let i = 1; i <= count; i += 1) {
            summ -=value;
            counter -= 1;
        }
    }
    
    minus(min, map.get(min));
    minus(max, map.get(max));
    
    return (summ/counter).toFixed(5);
};