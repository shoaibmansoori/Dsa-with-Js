/*
Question 2: Find the number of digits?
Ex : 12345 -> 5
*/


const numberOfDigits = (nums)=>{
     nums  = Math.abs(nums)
    let count =0;
    do{
        count ++;
        nums = Math.floor(nums/10 )
    }
    while(nums>0)
    return count;
}

console.log(numberOfDigits(-798757238));