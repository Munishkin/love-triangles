/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  if (preferences.length < 3) return 0;
  let count = 0;
  let first, second, third;
  let loveTriangles = {};
  for (let i = 0; i < preferences.length; i++) {
    if (!loveTriangles[i]) {
      first = preferences[i];
      second = preferences[first - 1];
      if (i + 1 !== second - 1 && first !== i + 1) {
        third = preferences[second - 1]
        if (third === i + 1) {
          count++;
          loveTriangles[first - 1] = true;
          loveTriangles[second - 1] = true;
          loveTriangles[third - 1] = true;
        }
      }
    }
  }
  return count;
};
