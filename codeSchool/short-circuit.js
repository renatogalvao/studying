// AN EXAMPLE OF SHORT CIRCUIT USING IN JAVASCRIPT.

// ||
// Looks for the very first positive or last negative possibility on the expression.

// On the example below, javascript will check the driver variable to see if it's true and if true THERE'S NO longer any checking on the right hand of the expression.
var driver = true;
var pilot = true;

var isDriving = driver || pilot;

console.log(isDriving) // true coming from the driver variable, pilot isn't checked.


// In this second example javascript will check if driver is true and as it is not passes to the pilot variable which is true.
var driver = true;
var pilot = true;

var isDriving = pilot || driver;

console.log(isDriving) // true coming from the pilot variable, driver isn't checked.


// In this third example javascript will pass through driver variable which is false, and assign isDriving with pilot value;
var driver = false;
var pilot = true;

var isDriving = pilot || driver;

console.log(isDriving) // true coming form the driver variable, pilot was negative.



// In this fourth example javascript will pass through every single variable and will assign isDriving with the last negative value.
var driver = false;
var pilot = false;
var robot = false;

var isDriving = pilot || driver || robot;

console.log(isDriving) // false coming form the robot variable, which is the last one negative value.





// &&
// Looks for the very first negative or last positive possibility on the expression.

// On the example below, javascript will check the driver variable to see if it's true and if true THERE'S NO longer any checking on the right hand of the expression.
var driver = true;
var pilot = true;

var isDriving = driver && pilot;

console.log(isDriving) // true coming from the pilot variable, driver was checked but had a positive content.


// In this second example javascript will check if driver is true and as it is not passes to the pilot variable which is true.
var driver = true;
var pilot = true;

var isDriving = pilot && driver;

console.log(isDriving) // true coming from the driver variable, pilot was checked but had a positive content.


// In this third example javascript will pass through driver variable which is false, and assign isDriving with pilot value;
var driver = false;
var pilot = true;

var isDriving = pilot && driver;

console.log(isDriving) // false coming form the driver variable, pilot was negative.


// In this fourth example javascript will pass through every single variable and will assign isDriving with the last negative value.
var driver = false;
var pilot = false;
var robot = false;

var isDriving = pilot || driver || robot;

console.log(isDriving) // false coming form the robot variable, which is the last one negative value on the expression.

