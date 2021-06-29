// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0


const dividend: number = 10;

function tobeDivided(divisor: number) {
    if (divisor === 0) {
        try {
            throw new Error;    
        }
        catch(e) {
            console.log("fail");
        }
    } else {
        console.log(dividend / divisor);
    }
}

tobeDivided(0);