const {LocalStorage} = require("node-localstorage");
let localStorage = new LocalStorage('./storage');

function guessinggame(){
  //get user's name
  let name = prompt("Enter name?");
  //save username
  localStorage.setItem("username",name);
  
  numberguessing();
}

function numberguessing(n = 2,stagenumber = 1,point= 0)
{
  //get a random number from 1 - n
  let randomnumber = Math.floor(Math.random() * n)+1;
  //get user's input
  let number = prompt(`Enter number from 1- ${n}`); 

  //if the user matches with the random number, the user will be moved to another level
  if(number == randomnumber)
  {
    console.log(`Congratulations, you made it to stage ${stagenumber + 1}`);
    
    localStorage.setItem("point",point+1);
    
    numberguessing(n+1,stagenumber+1,point+1);
  }
  else
  {
    console.log("Try again");
  }
  return;
}
guessinggame();