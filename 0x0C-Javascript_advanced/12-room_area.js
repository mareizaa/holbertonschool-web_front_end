var roomDimensions = { width: 50, length: 100 };

function getArea () {
    return roomDimensions.width * roomDimensions.length;
}

var boundGetArea = getArea.bind(roomDimensions);
console.log(boundGetArea());
