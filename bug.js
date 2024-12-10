function myFunc() {
  console.log(this);
}

myFunc(); // this is undefined in strict mode, window in non-strict mode

const obj = {
  myFunc: myFunc
};

obj.myFunc(); // this is obj