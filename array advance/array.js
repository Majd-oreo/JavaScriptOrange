console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]
[1,7,9,45]

 ["Str" "alex","moh"
 ["Str","alex","moh"]

 'the','fox' 'over' lazy, 'dog',  ]
  ['the','fox', 'over', lazy, 'dog']


*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
Tomato -> 0
Banana -> 1

*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let Favoritefood = ["Magloba","Doale","Burger","Muskhan","Spaghite"]
let Favoritesport = ["swiming","Cardio","Running"]
let Favoritemovie = ["Amelie","Dead poets Socitey","The perks of being a wallflower","Alice in wonderland"]

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(array){
    let first = array[0];
  console.log(first)
}
firstOfArray([1,4,5])
firstOfArray(["t","u","g","x"])

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr){
    let last = arr[arr.length - 1];
    console.log(last)
}
lastOfArray([1,4,5])
lastOfArray(["t","u","g","x"])
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var ar =  [0,5,7,9]
ar.shift()
ar.shift()
ar.shift()
ar.push(10)
ar.push(11)

ar.unshift(6,8)
ar.unshift(3,4)
ar.unshift(1)
ar.pop()


console.log(ar)
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]
array2.push(3)
array2.shift()
array2.unshift(2)
array2.pop()

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arrays){
    if(arrays.length %2 !== 0){
        return arrays[Math.floor(arrays.length/2)];
    }else{
         const mid1 = arrays[arrays.length / 2 -1]
         const mid2 = arrays[arrays.length / 2]
         return `${mid1} and ${mid2}`;
    }
}
console.log(middleOfArray([1, 4, 5,4]));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals[0] = 'zebra'
animals[1] = 'elephant'
animals.pop()
console.log(animals)

var nums =  [1,2,3,8,9]
nums[0] = 5;
nums[1] = -22;
nums [2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
console.log(nums)
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(a , index){
    
    return a[index]; 
    }
    var nums= [1,2,3,8,9];
    
    console.log(indexOfArray(nums,3))
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(aa){
   
    nums = aa.slice(-1)
return nums
}
 let nums= [1,2,3,8,9]
console.log(arrayExceptLast(nums))
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(nu , add){
    nu.pop()

    nu.push(add)
       return nu;
   
   }
   let nu =  [1,2,3,8,9]
   console.log(addToEnd(nu,55))


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function sumArray(nums){
    let summ = 0

for(i = 0 ; i<nums.length; i++){
 summ += nums[i]

}
        return summ

}
let nums= [1,2,3,8,9]
console.log(sumArray(nums))
// while loop
function sumArray(nums){
    let summ = 0
            let i = 0

    while(i<nums.length){
       summ += nums[i]
        i++

    }
    return summ

}
let nums= [1,2,3,8,9]
console.log(sumArray(nums))


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function minInArray(nums){
    min = nums[0]
for(i = 0; i<nums.length; i++){
    if(min>nums[i]){
        min = nums[i]
    }
}
return min
}
let nums= [1,2,3,8,9]
console.log(minInArray(nums))
//while loop

function minInArray(nums){
    min = nums[0]
    let i = 0
    while (i<nums.length){
        if(min>nums[i]){
            min = nums[i]
        }
        i++
    }
    return min

}
let nums= [1,2,3,8,9]
console.log(minInArray(nums))

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function removeFromArray(nums, element){
    for(i = 0 ; i<nums.length ; i++){
        if(nums[i] == element){
           nums.splice(i , 1)
        }
    }
    return nums

}
nums= [1,2,3,8,9]
console.log(removeFromArray(nums,8))
//while loop

function removeFromArray(nums, element){
    let i =0;
    while(i<nums.length){
        if(nums[i] == element){
            nums.splice(i, 1)
        }else{
            i++
        }
    }
    return nums
}
nums= [1,2,3,8,9]
console.log(removeFromArray(nums,8))

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function oddArray(array){
    let odd = []

    for(i= 0; i<array.length; i++){
        array[i] % 2 !== 0 && odd.push(array[i])
    }
    return odd
    
}
nums= [1,2,3,8,9]
console.log(oddArray(nums))
//while loop

function oddArray(array){
    let odd = []
    let i = 0;
    while(i<array.length){
        array[i] % 2 !== 0 && odd.push(array[i])
        i++
    }
    return odd
}
nums= [1,2,3,8,9]
console.log(oddArray(nums))

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function aveArray(array){
    let sum = 0
        for(i = 0; i<array.length; i++){
            sum += array[i];
           
        }
         let avg = sum/ array.length;
    return avg;
    }
    nums=  [1,2,3,8,9,77]
    console.log(aveArray(nums) )
// while loop

function aveArray(array){
    let sum = 0
    let i = 0
        while( i<array.length){
            sum += array[i];
           i++
        }
         let avg = sum/ array.length;
    return avg;
    }
    nums=  [1,2,3,8,9,77]
    console.log(aveArray(nums) )




/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function shorterInArray(strings){
   let shortest = strings[0]
for (i=0 ; i<strings.length; i++){
    if(shortest.length > strings[i].length){
        shortest = strings[i]
    }
}
return shortest

}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArray(strings))

//while loop
function shorterInArray(strings){
    let shortest = strings[0]
    let i = 0
 while( i<strings.length){
     if(shortest.length > strings[i].length){
         shortest = strings[i]
        
     }
     i++
 }
 return shortest
 
 }
 var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
 console.log(shorterInArray(strings))

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/ 
//for loop
function repeatChar(string, char){
   let count = 0;
for(i = 0; i<string.length; i++){
    if(string[i] == char){
        count ++
    }
}
return count
}
string= "alex mercer madrasa rashed2 emad hala"
console.log(repeatChar(string,"a") )
repeatChar(string,"z") 

// while loop
function repeatChar(string, char){
    let count = 0;
    let i = 0;
 while( i<string.length){
     if(string[i] == char){
         count ++
     }
     i++
 }
 return count
 }
 string= "alex mercer madrasa rashed2 emad hala"
 console.log(repeatChar(string,"a") )
 repeatChar(string,"z") 
 

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function evenIndexOddLength(strings){
    let evenodd = []
    for(i= 0; i<strings.length;i++){
        i % 2 !== 0 &&  strings[i] % 2 == 0 && evenodd.push(strings[i])
             
         }

return evenodd
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(evenIndexOddLength(strings) )
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop

function powerElementIndex(array){
    let power = []
   for(i= 0; i<array.length;i++){
power.push(array[i] ** i) 

   }
return power

}
nums= [44, 5, 4, 3, 2, 10]
console.log(powerElementIndex(nums))
//while loop


function powerElementIndex(array){
    let power = []
    i= 0;
   while( i<array.length){
power.push(array[i] ** i) 
i++
   }
return power

}
nums= [44, 5, 4, 3, 2, 10]
console.log(powerElementIndex(nums))

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function evenNumberEvenIndex(nums){
    let even =[]
    for(i= 0; i<nums.length;i++){
   i % 2 == 0 &&  nums[i] % 2 == 0 && even.push(nums[i])
        
    }
    return even


}
nums= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(nums))

//while loop

function evenNumberEvenIndex(nums){
    let even =[];
    i= 0;

    while( i<nums.length){
        i % 2 == 0 && nums[i] % 2 == 0 && even.push(nums[i])
      i++
        
    }
    
    return even


}
nums= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(nums))



