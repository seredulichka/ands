/**
* Leetcode #1694
* Difficulty: Easy
* https://leetcode.com/problems/reformat-phone-number/
*/
export const reformatPhoneNumber = number => {
    const reformatNumber = number => {
        if (number.length <= 3) return number;
        if (number.length == 4) return number.substring(0,2) + '-' + number.substring(2,4);
        
        return number.substring(0,3) + '-' + reformatNumber(number.substring(3, number.length));
    };

    return reformatNumber(number.replace(/\D/g, ''));
};