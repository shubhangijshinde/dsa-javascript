/**
 * 733.Flood Fill
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    let original = image[sr][sc];

    const fill = (image, sr, sc) => {
        if(sr < 0 || sc < 0 || sr > image.length-1 || sc > image[0].length -1 || image[sr][sc] === color || image[sr][sc] !== original) return image;
        image[sr][sc] = color;
        fill(image, sr-1, sc);
        fill(image, sr+1, sc);
        fill(image, sr, sc-1);
        fill(image, sr, sc+1);

        return image;
    }

    return fill(image, sr, sc);
};

/**
 * 1041. Robot Bounded In Circle
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	let head = 0;
	let x = 0;
	let y = 0;

    for(let instruction of instructions) {
        if(instruction == 'G') {
            x = dirs[head][0];
            y = dirs[head][1];
        }
        else if(instruction == 'L') {
            head = (4 + head - 1) % 4;
        }
        else {
            head = (4 + head + 1) % 4;
        }

        console.log(`head: ${head}, X:${x}, Y:${y}`)
    }

    const isAtOrigin = (x == 0 && y == 0);
    const isHeadingNorth = head === 0;

    return isAtOrigin || (!isHeadingNorth);
};