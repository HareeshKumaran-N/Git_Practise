/*

Edge Cases are Handled in this version

 */


function reverse(str)
{
   if(typeof str!=='string' || str.length===0)
   return "Invalid Input";
   
   return str.split("").reverse().join("")
}

console.log(reverse(""));