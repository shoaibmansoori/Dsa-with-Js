/*
Question 4: Find the Missing Number?
Ex : [1,3,0] --> missing is 2 
*/


const fibonecciNumber = (nums)=>{

      let sum = 0;
      for(let i=0; i<nums.length ; i++){
        sum  += nums[i];
      }
      return nums.length*(nums.length+1)/2 - sum
  }
  
  console.log(fibonecciNumber([1,4,3,2,0]));