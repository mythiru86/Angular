"use strict";
function greet(name, prefix, suffix) {
    if (prefix === void 0) { prefix = 'Hello'; }
    if (suffix === void 0) { suffix = 'Welcome to our Service'; }
    console.log(prefix + " " + name + ", " + suffix);
}
greet('Vivek');
greet('Vivek', 'Hi', 'How Are you');
