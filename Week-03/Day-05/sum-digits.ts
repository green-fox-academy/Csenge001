//Given a non-negative integer n, return the sum of its digits recursively (without loops).


function sumOfDigits (n: number): number {
    if (n.toString().length <= 1) {
        return n;
    } else {
        return n % 10 + sumOfDigits(Math.floor(n / 10));
    }
}

console.log(sumOfDigits(126));
