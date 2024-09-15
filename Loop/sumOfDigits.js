/*
Question 2: Sum of digits of a number;
Ex : 1234 -> 1+2+3+4 
*/


const sumOfDigits = (nums)=>{
    let sum =0;
    while(nums>0){
       sum += nums%10;
       nums = Math.floor(nums / 10);
    }
    return sum;
}

console.log(sumOfDigits(1234));