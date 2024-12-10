function myFunc() {
  console.log(this);
}

// Use arrow function to lexically bind 'this'
const arrowMyFunc = () => {
  console.log(this); // 'this' will be the surrounding context
};

myFunc(); // this is undefined in strict mode, window in non-strict mode

const obj = {
  myFunc: myFunc,
  arrowMyFunc: arrowMyFunc
};

obj.myFunc(); // this is obj
obj.arrowMyFunc(); // this is the global object or undefined depending on strict mode

// Explicitly bind 'this' using bind()
const boundMyFunc = myFunc.bind(obj);
boundMyFunc(); // this is now obj