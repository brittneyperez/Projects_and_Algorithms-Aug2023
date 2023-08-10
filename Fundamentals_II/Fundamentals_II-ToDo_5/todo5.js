// * Algoritm 5 | Fundamentals II

//* 1. Sigma
function sigma(num) {
    let sum = 0;
    for (let i=1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sigma(3));
console.log(sigma(5));


//* 2. Factorials
function factorial(num) {
    let result = 1;
    for (let i=1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(3));
console.log(factorial(5));


//* 3. Star Art
function drawLeftStars(num) {
    let stars = ''
    for (let i=0; i < num; i++) {
        stars += '*'; // Add an asterisk to the stars string.
    }
    console.log(stars);
}

function drawRightStars(num) {
    let spaces = '';
    let stars = '';
    // 1. Create spaces before the stars:
    for (let i=0; i < (75 - num); i++) {
        spaces += ' ';
    }
    // 2. The create the stars
    for (let i=0; i < num; i++) {
        stars += '*';
    }
    console.log(spaces + stars);
}

function drawCenteredStars(num) {
    let spacesBefore = '';
    let spacesAfter = '';
    let stars = '';
    let totalSpaces = 75 - num;
    // 1. Calculate spaces before the stars:
    for (let i=0; i < Math.floor(totalSpaces / 2); i++) {
        spacesBefore += ' ';
    }
    // 2. Calculate spaces after the stars:
    for (let i=0; i < Math.ceil(totalSpaces / 2); i++) {
        spacesAfter += ' ';
    }
    // 3. Create stars:
    for (let i=0; i < num; i++) {
        stars += '*';
    }
    console.log(spacesBefore + stars + spacesAfter);
}

drawLeftStars(3);
drawCenteredStars(15);
drawRightStars(5);

function drawEpicBattleScene() {
    const rebellionShip = ' >o< ';
    const empireShip = '(=o=)';
    const space = '   ';
    
    console.log(rebellionShip + space + empireShip);
    console.log(space + empireShip + rebellionShip);
    console.log(rebellionShip + space + empireShip);
}
drawEpicBattleScene();


//* 3. Character Art
function drawLeftChars(num, char) {
    let chars = ''
    for (let i=0; i < num; i++) {
        chars += char;
    }
    console.log(chars);
}

function drawRightChars(num, char) {
    let spaces = '';
    let chars = '';
    for (let i=0; i < (75 - num); i++) {
        spaces += ' ';
    }
    for (let i=0; i < num; i++) {
        chars += char;
    }
    console.log(spaces + chars);
}

function drawCenteredChars(num, char) {
    let spacesBefore = '';
    let spacesAfter = '';
    let chars = '';
    let totalSpaces = 75 - num;
    
    for (let i=0; i < Math.floor(totalSpaces / 2); i++) {
        spacesBefore += ' ';
    }
    for (let i=0; i < Math.ceil(totalSpaces / 2); i++) {
        spacesAfter += ' ';
    }
    for (let i=0; i < num; i++) {
        chars += char;
    }
    console.log(spacesBefore + chars + spacesAfter);
}

drawLeftChars(3, '#');
drawCenteredChars(15, '*');
drawRightChars(5, '+');
