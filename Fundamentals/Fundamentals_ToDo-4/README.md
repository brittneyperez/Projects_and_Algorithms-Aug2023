# Fundamentals Todo ４
２０２３年０８月０８日（火）

This repository contains a fourth collection of JavaScript algorithms to perform various tasks. Each algorithm is briefly explained below:

## 1. Only Keep the Last Few

Stan learned something today: that directly decrementing an array’s `.length` immediately shortens it by that amount. Given array `arr` and number `X`, this function removes all except the last `X` elements, and returns `arr` (changed and shorter). Given `([2,4,6,8,10],3)`, change the given array to `[6,8,10]` and return it.

## 2. Math Help

Cartman doesn’t really like math; he needs help. You are given two numbers—coefficients `M` and `B` in the equation `Y = MX + B`. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of `X` where `Y` equals zero; Cartman just snorts in his general direction).

## 3. Poor Kenny

Kenny tries to stay safe, but somehow _everyday_ something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, the function `whatHappensToday()` will print a day’s outcome based on a random number.

## 4. What Really Happened?

Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. The function `whatHappensToday()` is changed to `whatReallyHappensToday()`. In this new function each disaster is tested independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today—or none. Maybe Kenny will survive!

## 5. Soaring IQ

Spending time at the Dojo will definitely makes ninjas smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ? The function `calculateFinalIQ()` will take in two parameters—the student's initial IQ and the number of days spent in the COding Dojo—to determine the student's final IQ.

## 6. Letter Grade

Mr. Cerise teaches high school math. The function, `assignAndPrintLetterGrade()` assigns and prints a letter grade, given an integer representing a score from 0 to 100. Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. (For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".)

## 7. More Accurate Grades

For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .