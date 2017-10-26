const mixin = function(){return this*this};
const result = 5::mixin;
console.log(result());  //25


// .babelrc  { "presets": ["stage-0"] }
//          ИЛИ
//           {  "plugins": ["babel-plugin-transform-function-bind"] }
//                          {  "plugins": ["transform-function-bind"] }

// "start": "babel-node script2.js"
