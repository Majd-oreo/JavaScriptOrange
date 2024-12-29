// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for(number=0; number<10; number++){
    console.log(number)
}


// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for(numbers=0 ; numbers<10; numbers++){
    if(numbers %2 == 0){
        console.log(numbers);
    }
}


// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
for(odd=0 ; odd <10; odd++){
    if(odd % 2 != 0){
        console.log(odd);
    }
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
let multi = parseFloat(prompt("Please enter a valid number"))

if(!isNaN(multi)){
    for(i=1; i<=10 ; i++){
        console.log(`${multi * i} ` )
    }
}else{
    console.log("wrong not a number")
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let sum =1 ;
let i =1;
while(i>0 && i<100){
i++;
sum += i;
console.log(`${sum} `)
}


// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
let nom = parseInt(prompt("enter a number"))
if(!isNaN(nom)&& nom>0){
    let facc = 1;
    for(let i=1; i <=nom; i++){
        facc *= i;

    }
    console.log("&{fac}")
}else{
    console.log("please enter a valid number")
}


// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
// Prompt the user to enter the maximum number for the Fibonacci series
let maxNumber = parseInt(prompt("Enter the maximum number for the Fibonacci series:"));

// Check if the entered value is valid
if (!isNaN(maxNumber) && maxNumber > 0) {
  let a = 0, b = 1; // Initialize the first two Fibonacci numbers
  console.log("Fibonacci series:");
  console.log(a); // Print the first number
  while (b <= maxNumber) {
    console.log(b); // Print the current number
    let next = a + b; // Calculate the next Fibonacci number
    a = b; // Update `a` to the current number
    b = next; // Update `b` to the next number
  }
} else {
  console.log("Please enter a valid positive number.");
}




// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.


let numbers = [5, 10, 15, 20];

// Initialize the index to the last element of the array
let index = numbers.length - 1;

// Print the numbers in reverse order using a while loop
console.log("Numbers in reverse order:");
while (index >= 0) {
  console.log(numbers[index]);
  index--; // Decrement the index to move backward
}
