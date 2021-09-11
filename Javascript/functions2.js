// const paintWalls = function () {
//     console.log("The wall has been painted red");
// }

// paintWalls();

//single argument
const paintWalls = function (color) {
    console.log("The wall has been painted " + color);
}

paintWalls("red");

const pickWall = function (wall, color) {
    console.log("The " + wall + " wall has been painted " + color);
}

pickWall("south", "red");