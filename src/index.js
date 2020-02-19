module.exports = function reverse(n) {
    let str = String(n).replace('-', '').split('').reverse().join('')
    return str;
}
