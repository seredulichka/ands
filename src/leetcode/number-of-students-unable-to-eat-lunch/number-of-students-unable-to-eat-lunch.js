/**
* Leetcode #1700
* Difficulty: Easy
* https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
*/
export const numberOfStudentsUnableToEatLunch = (students, sandwiches) => {
    for (const sandwiche of sandwiches) {
        const ind = students.indexOf(sandwiche);

        if (ind !== -1) {
            students.splice(ind, 1)
        } else {
            return students.length
        }
    }

    return 0;
};