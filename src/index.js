module.exports = function reverse(n) {
    let absValue = Math.abs(n);
    let toArr = absValue.toString().split('');
    let reverse = toArr.reverse();
    return reverse.join('');
}