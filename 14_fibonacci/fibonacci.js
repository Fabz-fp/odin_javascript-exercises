const fibonacci = function(num) {
    let fib = [1,1];

    if(typeof num === "string") {
        num = parseInt(num);
    }

    if(num < 0) return "OOPS";
    else if(num === 0) return 0;
    else if(num === 1 || num === 2) return 1;
    else {
        for(let i = 2; i < num; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
    }
    
    return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
