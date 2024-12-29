// 1-Write a function to find the largest element in an array.
function largestnumber(array){
    return Math.max(...array)

}
console.log(largestnumber([1,2,34,5]))
// 2-Write a function to find the smallest element in an array.
function smallestelement(arr){
    return Math.min(...arr)
}
console.log(smallestelement([1,23,4,5]))

// 3-Write a function to find the sum of all elements in an array.
function sumelement(ar){
    let sum = 0;
    for(i = 0 ; i <ar.length ; i++){
        sum += ar[i]
    }
    return sum;

}
console.log(sumelement[2,3,4,5,6])

// 4-Write a function to find the average of all elements in an array.
function averageelement(a){
    let average = 0;
    for(i = 0 ; i < a.length ; i++){
        average += a[i] / a.length
        return average;
    }
}
console.log(averageelement([1,23,4]))

// 5-Write a function to find the median of all elements in an array.
function median(aa){
    let len = aa.length;
    let mid = Math.floor(len/2);
    if( len % 2 != 0){
        return aa[mid];
    }else{
        return(aa[mid - 1]+ aa[mid])
    }
}
console.log(median([1,4,5,6,8]))
// 6-Write a function to remove all duplicates from an array.
function duplicates(ara)
{
const numberswithoutduplicates = [...new Set(ara)];
console.log(numberswithoutduplicates);
}
duplicates([1,1,3,4,5,5])
// 7-Write a function to sort an array in ascending order.
function ascendingorder(order){
    if(order.length == 0){
        console.log("empty")
    }else{
        order.sort((a, b) => a - b);


    }
    return order
}
console.log(ascendingorder([1,2,3,4,5]))
// 8-Write a function to sort an array in descending order.
function descendingorder(order1){
    if(order1.length == 0){
        console.log("empty")
    }else{
        order1.sort((a, b) => b - a);


    }
    return order1
}
console.log(descendingorder([1,2,3,4,5]))

// 9-Write a function to shuffle the elements of an array randomly.
function shuffle(arrays){
    for(i = arrays.length - 1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1))
        [arrays[i], arrays[j]] = [arrays[j], arrays[i]]

    }
}
console.log(shuffle([1,2,4,45,5,2]))