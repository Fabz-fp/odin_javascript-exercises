const palindromes = function (str) {
    let ogStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let reversedStr = ogStr.split("").reverse().join("");

    return ogStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
