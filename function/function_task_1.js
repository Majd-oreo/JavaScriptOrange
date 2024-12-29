/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(x,y,z,n){

return `You will be a ${x} in ${y},and married to ${z} with ${n} kids `
}
let all = tellFortune('software engineer', 'Jordan', 'Alice', 3);
console.log(all)


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age){
const dogs = age * 7;
console.log(`Your doggie is ${dogs} years old in dog years!`)

}
calculateDogAge(7);


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amountperday){
  const maxage = 100;
  const cal = maxage - age;
  const total = cal * amountperday* 365;
  console.log(`You will need ${total} cups of tea to last you until the ripe old age of 100`)
}
calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
console.log(`Hello ${name}`)
}
greet("Adam");

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
x is not defined
////////////////////////////////

function double(7) {
  return 2 * 7;
}
in the function we dont have values and it shouldnt be fixed 
//////////////////////////////////////////


function double('7') {
  return 2 * 'x';
}
  Unexpected string ('7')
*/




/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

  function double1(x) {
  return 2 * x ;
}
 //////////////////////// 

functiondouble2 x)
return 2 * x;
}

function double2 (x)
return 2 * x;
}
///////////////////////////////////////
function (x) double3 {
  return 2 * x;

  function double3 (x)  {
  return 2 * x;
  }
/////////////////////////////
*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(numberr){
  let alc = numberr * numberr * numberr;
  console.log(alc)

}
cube(4)


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1 , num2){
  calcc = num1 * num2;
  console.log(calcc);

}
multiply(3,4)
multiply(5,4)


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense (age){
  if(age >= 20){
    console.log("yes you can")
  }else{
    console.log(`please come back after ${20 -age} years to get one`)
  }
}
canIGetADrivingLicense(21);
canIGetADrivingLicense(17);
canIGetADrivingLicense(20);


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(string1, string2){
  if(string1.length === string2.length){
    console.log("true")
  }else{
console.log("false")
  }
}
sameLength("tree","clue")
sameLength("tree","car")
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(number1, number2){
  if(number1 > number2){
    console.log(number1)
  }else{
    console.log(number2)
  }

}
largerNubmer(5,6)
largerNubmer(5,3)


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(first,second,third){
  if(first < second && first < third){
    console.log(first)
  }else if(second < first && second < third) {
    console.log(second)
  }else{
    console.log(third)
  }
}
smallerNubmer(8,6,7);
smallerNubmer(5,99,34);
smallerNubmer(5,99,3);
smallerNubmer(5,3,3)
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(s1,s2,s3,s4,s5){
  let strinn = [s1,s2,s3,s4,s5]
  let shortest = strinn[0];
  for(i = 1; i < strinn.length; i++){
    if(strinn[i].length < shortest.length){
      shortest = strinn[i]
    }
  }
  return shortest

}
console.log(shorterString("air","tr","car","by","github"))

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(ss1,ss2,ss3,ss4){
  let strinngs = [ss1,ss2,ss3,ss4];
  let longest = strinngs[0];
  for(i = 1 ; i<strinngs.length; i++){
    if(strinngs[i].length > longest.length){
      longest = strinngs[i]
    }
  }
  
  return longest
}
console.log(longerString("air","school","car","github"))

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(nn){
  if (nn % 2 === 0){
    console.log("true")
  }else{
    console.log("false")
  }
}
isEven(1)
isEven(2)


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(nnn){
  if (nnn %2 != 0){
    console.log("true")
  }else{
    console.log("false")
  }
}
isOdd(4)
isOdd(5)


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(numberr1){
 const all = Math.abs(numberr1);
  console.log(all)
}

positive(4)
positive(-5)

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName, lastName){
  console.log(`${firstName} ${lastName}`)
}
fullName("Adam","McCallen")
fullName("Alex", "Mercer")

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(in1,in2,in3,in4,in5){
  const summ = (in1+in2+in3+in4+in5) / 5;
  console.log(summ)
}
average(1,2,3,4,5)
average(5,7,9,3,5)

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(random){
  rnumber = Math.random()
  console.log(rnumber)

}
randomNumber()

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(ran1,ran2){
  ranumber = Math.floor(Math.random() * (ran2-ran1+1))+ran1;

  console.log(ranumber)

}
randomBetweenNumbers(1,8)


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(score){
  if(score>= 95){
    console.log("A")
  }else if(score>= 85 && score<= 94){
    console.log("B")

  }else if(score>= 70 && score<= 84){
    console.log("C")

    
  }else if(score>= 50 && score<= 69){
    console.log("D")

    
  }else if(score>= 0 && score<= 49){
    console.log("F")

    
  }
}
scoreInUniversty(96)
scoreInUniversty(3)
scoreInUniversty(71)

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let count =0;

function counter(){
  return count++;
}
console.log(counter())
console.log(counter())


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
// let countt = 0
function resetCounter(){
return countt++
let currentCount = countt; // Store the current count
countt = 0; // Reset the counter to 0
return `${currentCount} and the counter reset now`; // Return the count before reset with the message

}
console.log(counter()); // Output: 0
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

console.log(resetCounter()); // Output: 2 and the counter reset now

console.log(counter()); // Output: 0
console.log(counter()); // Output: 1

console.log(resetCounter()); // Output: 1 and the counter reset now
