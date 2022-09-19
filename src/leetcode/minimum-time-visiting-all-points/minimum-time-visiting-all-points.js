/**
* Leetcode #1266
* Difficulty: Easy
* https://leetcode.com/problems/minimum-time-visiting-all-points/
*/
export const minimumTimeVisitingAllPoints = points => {
    let result = 0;

    for (let i = 0; i < points.length - 1; i += 1) {
        const [currentX, currentY] = points[i];
        const [nextX, nextY] = points[i + 1];
        result += Math.max(Math.abs(currentX - nextX), Math.abs(currentY - nextY));
    }
       
    return result; 
};