# JavaScript-global-variable
Please see Codepen: https://codepen.io/K-SY/pen/LYbaJVL
``` javascript
function addTwo(){  
  console.log(this); //2. window
  console.log(": 'this' in addTwo function is equal to global this");
  throw('Throw this is a empty function.');
  //2.Uncaught this is a empty function.
}

console.log(this); //1. window
console.log(": 'this' in global.");

addTwo();
```
