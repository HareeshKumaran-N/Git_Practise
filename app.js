/*

Functionalities:

>>Palindrome functionality is added but the reverse is written as a separate function.
 >>Edge case is handled from the branch x.   


 */


function reverse(str)
{ 
   let revStr=(str.split("").reverse().join("") );
   console.log(revStr)
    return (revStr);
}
function Palindrome(str)
{ 
    if(typeof str!== 'string' || str.length<=0)
     return "Invalid input"


   if(reverse(str)===str)
   return "Palindrome";
   else
   return "Not a Palindrome";
}

console.log(Palindrome(9));
