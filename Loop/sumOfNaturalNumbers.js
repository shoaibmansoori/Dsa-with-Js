/*
Question 1: Sum of all natural number from 1 to n;
Ex : sum of 1 to 5 is 15 
*/


const sumOfNaturalNumber = (nums)=>{
    // let sum =0;
    // for(let i=0; i<=nums; i++){
    //     sum += i;
    // }
    return nums*(nums+1)/2
    // return sum;
}

console.log(sumOfNaturalNumber(5));