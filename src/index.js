module.exports = function reverse(n) {
  return Array.from(String(Math.abs(n)))
    .map((el, i, arr) => arr[arr.length - i - 1])
    .join('');
};
