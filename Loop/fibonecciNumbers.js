/*
Question 4: Find the Fibonecci Number?
Ex : 0 0 1 1 2 3 5 8 ....   (n + n-1)
*/


const fibonecciNumber = (nums)=>{

  if(nums <2){
    return nums;
  }
  let prev=0, curr = 1, next;
 for(let i=2; i<=nums; i++){
  next = prev + curr;
  prev = curr;
  curr = next;
 }

 return next;

}

console.log(fibonecciNumber(10));