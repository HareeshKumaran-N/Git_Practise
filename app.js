/*

Functionalities:

>>Palindrome functionality is added but the reverse is written as a separate function.



 */

function reverse(str)
{ 
   let revStr=(str.split("").reverse().join("") );
   console.log(revStr)
    return (revStr);
}
function Palindrome(str)
{console.log(str)

   if(reverse(str)===str)
   return "Palindrome";
   else
   return "Not a Palindrome";
}




console.log(Palindrome("mox"));