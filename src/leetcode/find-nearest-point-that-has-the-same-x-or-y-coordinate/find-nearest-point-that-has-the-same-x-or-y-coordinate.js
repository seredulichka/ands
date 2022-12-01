/**
* Leetcode #1779
* Difficulty: Easy
* https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
*/
export const findNearestPointThatHasTheSameXOrYCoordinate = (x, y, points) => {
    let index = -1;
    let min = +Infinity;

    for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        if (point[0] !== x && point[1] !== y) continue;

        const distance = Math.abs(point[0] - x) + Math.abs(point[1] - y);
        console.log(distance)

        if(distance < min) {
            index = i; 
            min = distance;
        } 
    }

    return index;
};