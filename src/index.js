module.exports = function reverse(n) {
    return +Array.from(String(Math.abs(n)))
        .map((n, i, arr) => arr[arr.length - i - 1])
        .join("");
};
