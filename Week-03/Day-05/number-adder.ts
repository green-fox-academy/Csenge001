//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addNumbers(number: number): number {
    if (number <= 1) {
        return 1;
    } else {
      return number + addNumbers(number - 1);
    }
  }
  
  console.log(addNumbers(3));