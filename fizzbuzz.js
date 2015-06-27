// Place your FizzBuzz code here. 
var rangeLimit=100;

for(i=0;i<=rangeLimit;i++){
// Check numbers 1-20 to determine if number is divisble by 3 or 5
	// If number is divisible by 3 and 5, print FizzBuzz
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	// If number is only divisible by 3, print Fizz	
	} else if (i % 3 === 0) {
		console.log ('Fizz');
	// If number is divisible by 5, print Buzz	
	} else if (i % 5 === 0) {
		console.log ('Buzz');
	// If number is not divisible by 3 or 5, print number	
	} else console.log (i);
}
