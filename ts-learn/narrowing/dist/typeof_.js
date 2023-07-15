"use strict";
function printTest(s) {
    if (typeof s === "object" && s !== null) {
        for (const e of s) {
            console.log(e);
        }
    }
    else if (typeof s === "string") {
        console.log(s.toUpperCase());
    }
    else {
        console.log("other");
    }
}
printTest(["1", "2", "3", "4"]);
printTest(null);
printTest("hello");
