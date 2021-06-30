// LEVEL 1.1

// Plant your seeds. Because a square grid is the best layout for these and future seeds, write a function
// that determines the most efficient layout.

/**
 * Determines how many rows and columns your garden will
 * need to be closest to a square given a number of seeds.
 *
 * @param {number} seedCount - The number of seeds in your
 * seed packet.
 * @return {array} - [rows, columns] needed for your grid
 * layout (for example [4, 5] represents a 4 row x 5 column
 * grid)
 */
function grid(seedCount) {
    let side = Math.sqrt(seedCount);
    return [Math.round(side), Math.ceil(side)];
}