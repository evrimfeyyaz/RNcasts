"use strict";

const obj = {
  printThis: function () {
    console.log(this);
  },
};

// obj.printThis();

const printThis = obj.printThis.bind(obj);
printThis();
