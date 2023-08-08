//* Algorithm 4 | Fundamentals I

//* 1. Only Keep the Last Few
function removeLastElements(arr, x) {
    if (x >= arr.length) {
        return [];
    }
    return arr.slice(arr.length - x); //.slice() will get the last X elements of the array
}
const array = removeLastElements([2, 4, 6, 8, 10], 3);
console.log(array);


//* 2. Math Help
/* Reminder: The X-intercept is the value of 'X'
where 'Y' = 0 in the equation y = mx + b.
Solve for X by: X = -B / M */
function returnXIntercept(M, B) {
    return -B / M;
}
const M = 4;
const B = 16;
const xIntercept = returnXIntercept(M, B);
console.log("X-Intercept:", xIntercept);


//* 3. Poor Kenny
/* KEY STATS:
- Within 100 days:
    - 10% chance for "Volcano" (up to 10)
    - 15% chance for "Tsunami" (from 10 to 24)
    - 20% chance for "Earthquake" (from 25 to 44)
    - 25% chance for "Blizzard" (from 45 to 69)
    - 30% chance for "Meteor" (from 70 to 100)
*/
function whatHappensToday() {
    const randomNum = Math.random() * 100;
    console.log("What happens today?")
    
    if (randomNum < 10) {
        console.log("Volcano");
    } else if (randomNum < 25) {
        console.log("Tsunami");
    } else if (randomNum < 45) {
        console.log("Earthquake");
    } else if (randomNum < 70) {
        console.log("Blizzard");
    } else {
        console.log("Meteor");
    }
}
whatHappensToday();


//* 4. What Really Happened?
function whatReallyHappensToday() {
    const randomNum = Math.random() * 100;
    console.log("What REALLY happens today?")
    
    if (randomNum < 10) {
        console.log("Volcano");
    }
    if (randomNum < 25) {
        console.log("Tsunami");
    }
    if (randomNum < 45) {
        console.log("Earthquake");
    }
    if (randomNum < 70) {
        console.log("Blizzard");
    }
    if (randomNum < 100) {
        console.log("Meteor");
    }
}
whatReallyHappensToday();


//* 5. Soaring IQ
function calculateFinalIQ(initialIQ, numOfDaysSinceStarting) {
    let currentIQ = initialIQ;
    let incrementBy = 0.01;
    
    for (let day=1; day <= numOfDaysSinceStarting; day++) {
        currentIQ += incrementBy; // currentIQ = currentIQ + incrementBy
        incrementBy += 0.01; // With each passing day, the incrementation goes up by 0.01.
    }
    return currentIQ;
}
const bogdansInitialIQ = 101;
const numOfDays = 98;
const bogdansFinalIQ = calculateFinalIQ(bogdansInitialIQ, numOfDays);
console.log("Bogdan's Final IQ:", bogdansFinalIQ);


//* 6. Letter Grade
function assignAndPrintLetterGrade(scoreInt) {
    let grade = '';
    if (scoreInt >= 90) {
        grade = 'A';
    } else if (scoreInt >= 80) {
        grade = 'B';
    } else if (scoreInt >= 70) {
        grade = 'C';
    } else if (scoreInt >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`Score: ${scoreInt}. Grade: ${grade}.`);
}
assignAndPrintLetterGrade(88);
assignAndPrintLetterGrade(61);


//* 7. More Accurate Grades
function assignAndPrintLetterGradeBetter(scoreInt) {
    let grade = '';
    
    if (scoreInt >= 90) {
        grade = 'A';
        if (scoreInt >= 98) {
            grade += '+';
        } else if (scoreInt <= 92) {
            grade += '-';
        }
    } else if (scoreInt >= 80) {
        grade = 'B';
        if (scoreInt >= 88) {
            grade += '+';
        } else if (scoreInt <= 82) {
            grade += '-';
        }
    } else if (scoreInt >= 70) {
        grade = 'C';
        if (scoreInt >= 78) {
            grade += '+';
        } else if (scoreInt <= 72) {
            grade += '-';
        }
    } else if (scoreInt >= 60) {
        grade = 'D';
        if (scoreInt >= 68) {
            grade += '+';
        } else if (scoreInt <= 62) {
            grade += '-';
        }
    } else {
        grade = 'F';
    }
    console.log(`Score: ${scoreInt}. Grade: ${grade}.`);
}
assignAndPrintLetterGradeBetter(88);
assignAndPrintLetterGradeBetter(61);