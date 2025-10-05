let strs = ["florist", "floral", "flight"];
function findLongestPrefix(strs) {
  let str = "";
  let firstElem = strs[0];
  for (let i = 0; i < firstElem.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstElem[i] !== strs[j][i]) {
        return str;
      }
    }
    str += firstElem[i];
  }
  return str;
}
