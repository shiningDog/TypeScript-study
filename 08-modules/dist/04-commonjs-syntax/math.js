"use strict";
function absolute(num) {
    if (num < 0)
        return num * -1;
    return num;
}
module.exports = {
    pi: 3.14,
    squareTow: 1.41,
    phi: 1.61,
    absolute,
};
// exports.absolute = absolute;
// exports.pi = 3.14;