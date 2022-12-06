/*

Functionalities:

>> Edge Cases are Handled.
   1. if the input is said to be a empty string or if it is not a string the function wont work.

>> Palindrome functionality is added.



 */


function reverse(str)
{
   if(typeof str!=='string' || str.length===0)
   return "Invalid Input";
   
   let revStr=(str.split("").reverse().join("") );
   if(revStr===str)
   return "Given string is a Palindrome: " + revStr;
   else
   return "Not a Palindrome but the revString is  "+revStr;
}

console.log(reverse("malaalam"));