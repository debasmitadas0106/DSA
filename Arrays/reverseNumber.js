// reversing a number

function reverseNum(num) {
    let reversed = 0;
    let number = Math.abs(num);
  
    while (number > 0) {
      lastDigit = number % 10;
      reversed = reversed * 10 + lastDigit;
      number = Math.floor(number / 10);
    }
    return reversed*Math.sign(num);
  }
  
  console.log(reverseNum(-248))