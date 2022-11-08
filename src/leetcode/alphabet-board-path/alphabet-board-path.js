/**
* Leetcode #1138
* Difficulty: Easy
* https://leetcode.com/problems/alphabet-board-path/
*/
export const alphabetBoardPath = target => {
    const map = new Map()
    const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]

    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
            map.set(board[i][j], [i, j])
        }
    }

    let position = [0, 0];
    let result = '';

    const addStep = (letter, amount)  => {
        for(let i = 0; i < amount; i += 1) {
            result += letter;
        }
    }

    const changeColumn = (start, end) => {
        if (start > end) {
            addStep('L', start - end)
        } else {
            addStep('R', end - start)
        }
    }

    const changeRow = (start, end) => {
        if (start > end) {
            addStep('U', start - end)
        } else {
            addStep('D', end - start)
        }
    }

    for (let i = 0; i < target.length; i += 1) {
        const [row, column] = map.get(target[i]);

        if (target[i - 1] === 'z') {
            changeRow(position[0], row);
            changeColumn(position[1], column);
        } else {
            changeColumn(position[1], column);
            changeRow(position[0], row);
        }

        position = [row, column];
        result += '!';
    }

    return result;
};