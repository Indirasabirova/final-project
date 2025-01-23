const leftColumn = document.getElementById('left-column');
const middleColumn = document.getElementById('middle-column');
const rightColumn = document.getElementById ('right-column');

let leftPos= 0;
let middlePos = 0;
let rightPos = 0;

const leftSpeed = 1;
const middleSpeed = -1;
const rightSpeed = 1;

function scrollBackground() {
    leftPos += leftSpeed;
    middlePos += middleSpeed;
    rightPos += rightSpeed;

    leftColumn.style.backgroundPositionY = leftPos + 'px';
    middleColumn.style.backgroundPositionY = middlePos + 'px';
    rightColumn.style.backgroundPositionY = rightPos + 'px';

    requestAnimationFrame(scrollBackground);

}

requestAnimationFrame(scrollBackground);
