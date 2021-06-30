// LEVEL 2.1

// Plant your new seeds. This time, write a function that takes an array of seeds and any number of rows and columns
// to plant your seeds in a grid represented by a 2D array.

/**
 * Returns a 2D array representing all seeds in a grid of size
 * row x cols.
 *
 * @param {array} seeds - Array of the Seeds in your packet.
 * @param {number} rows - The number of rows.
 * @param {number} cols = The number of columns.
 * @return {array} - 2D array representing grid of planted Seeds.
 */
function grid(seeds, rows, cols) {
    let result = [];
    let column = [];
    let columnCnt = 0;
    for(let i = 0; i < seeds.length; i++) {
        if (columnCnt < cols) {
            column.push(seeds[i]);
            columnCnt++;
            continue;
        }

        result.push(column);
        column = [seeds[i]];
        columnCnt = 1;
    }
    result.push(column);
    return result;
}