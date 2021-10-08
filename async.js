/* Timing Out - */
/* Objectives 1-3: Accept string message as argument, log message to console. */
function myTest() {
  console.log('Hello Cohort15!' );
setTimeout(() => {
 console.log('This is confusing');
}, 2000);
console.log('Just need to study');
/* or */
setTimeout(() => {console.log("this is the first message")}, 2000);
}


/* Objective 4: Create a function called getWords using several setTimeout calls */
function getWords() {
  console.log('Happy');
  setTimeout(() => {
    console.log('Birthday');
  }, 3000);
  setTimeout(()  => {
    console.log('America');
  }, 2000);
    console.log('Celebrate');

/* Callbacks and Recursions */
/* Objective 1: Create a function called done that logs Job's done! to the console. */
function done() {
  console.log("Job's done!");
}
/* Objective 2: Global function that accepts 2 arguments that logs a countdown from the number passed, delayed by 1 second each time and then executes the callback argument */
countDown(num, callback);
setTimeout(() => {
  if(num > 0) {
    console.log(num);
    countDown(num-1, callback);
  } else {
    callback();
  }, 1000);
  };


/* Promises Promises *?
/* Objecive 1: Create global variable called lunchTime with value true */
let lunchTime = true;
/* Objective 2: Create a new function called orderMeSomeFood that returns a new promise */
const orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
    
  });
};
/* Objective 3-5: In the resolver function of the Promise, write logic to check if the lunchTime variable is true. Create an object with two properties and values. Resolve promise with object */




