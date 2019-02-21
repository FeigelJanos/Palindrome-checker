
function palindrome(str) {
  
  //Create an empty array
  //Separate the input string into characters into the array
  //Fil the array with the characters
  //Filter out non letter or number characters
  let regex=/[a-z0-9]/ig;
  const charArray=str.toUpperCase().match(regex);
  
  //Create a variable for the middle element
  //create a variable for the last element
  let middle=0;
  let last=charArray.length-1;

  //If the array has even number of elements calculate the middle one
  if(charArray.length%2==0){
    middle=(charArray.length)/2;
  }
  //If the array has odd number of elements calculate the one before the middle one (its the last that needs to be compaired)
  else if(charArray.length>1){
    middle=(charArray.length-1)/2;
  }
  
   //Check if the first and last letters are the same
  //Check the next pair... until the last pair or the middle character if the array has an odd number of elements
  //If the checked characters do not match return false
  for(let i=0; i<middle; i++){
  if(charArray[i]!==charArray[last]){
    return false
  }
  last--
  }
  return true 
}


  

 
