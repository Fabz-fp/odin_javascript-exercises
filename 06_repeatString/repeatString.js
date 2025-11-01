const repeatString = function(str, num) {
    let strRepeated = ""
    for(let i = 0; i < num; i++) {
        strRepeated += str
    }
    return strRepeated
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
