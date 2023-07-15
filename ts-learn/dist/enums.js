"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["UP"] = 1] = "UP";
    Directions[Directions["DOWN"] = 2] = "DOWN";
    Directions[Directions["LEFT"] = 3] = "LEFT";
    Directions[Directions["RIGHT"] = 4] = "RIGHT";
})(Directions || (Directions = {}));
console.log(Directions.LEFT);
