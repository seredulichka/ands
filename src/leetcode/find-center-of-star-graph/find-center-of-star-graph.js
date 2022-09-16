/**
* Leetcode #1791
* Difficulty: Easy
* https://leetcode.com/problems/find-center-of-star-graph/
*/
export const findCenterOfStarGraph = edges => {
    const [[edge1, edge2], [edge3, edge4]] = edges;
    return edge1 === edge3 || edge1 === edge4 ? edge1 : edge2;
};