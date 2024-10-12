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