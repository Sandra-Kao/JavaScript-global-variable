function addTwo(){  
  console.log(this); //1.window
  console.log(": /'this/' in function.");
  throw('this is a empty function.');
  //2.Uncaught this is a empty function.
}
  console.log(this); //window
  console.log(": /'This/' in global.");

addTwo();
