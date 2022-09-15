/**
* Leetcode #1450
* Difficulty: Easy
* https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
*/
export const numberOfStudentsDoingHomeworkAtAGivenTime = (startTime, endTime, queryTime) => {
    let result = 0;
    
    for (let i = 0; i < startTime.length; i += 1) {
        if(endTime[i] >= queryTime && queryTime >= startTime[i]) result += 1;
    }
    
    return result; 
};