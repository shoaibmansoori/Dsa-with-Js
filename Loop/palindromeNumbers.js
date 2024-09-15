/*
Question 2: Find the number is palindrome or not?
Ex : 141 reverse 141 is palindrome number
*/


const palindromeNumber = (nums)=>{
    let reverseNumber =0, copyNumber = nums;
   while(copyNumber>0){
    reverseNumber = reverseNumber*10 + copyNumber%10
    copyNumber = Math.floor(copyNumber / 10)
   }
   return nums === reverseNumber;
}

console.log(palindromeNumber(1313));