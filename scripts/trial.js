function haveSameLastDigit(num1,num2)
{
  const lastDigit1=
  num1.toString().slice(-1);
  const lastDigit2=
  num2.toString().slice(-1);
  return lastDigit1 === lastDigit2;

}
const number1 = 123;
const number2 = 453;
const result = haveSameLastDigit(number1,number2);
console.log(result) 

