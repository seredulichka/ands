/**
* Leetcode #1290
* Difficulty: Easy
* https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
*/
export const convertBinaryNumberInALinkedListToInteger = head => {
    let binary = '';
    
    while (head) {
        binary += head.val;
        head = head.next;
    }
  
    return parseInt(binary, 2);
};

// export const convertBinaryNumberInALinkedListToInteger = head => {
//     let binary = '';
    
//     const getNext = (data) => {
//         if (!data) return
//         binary += data.val;
//         getNext(data.next);
//     }
    
//     getNext(head)
//     return parseInt(binary, 2);
// };