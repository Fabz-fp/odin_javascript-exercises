const repeatString = function(str, num) {
    if(num < 0) return "ERROR"
    let strRepeated = ""
    for(let i = 0; i < num; i++) {
        strRepeated += str
    }
    return strRepeated
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
