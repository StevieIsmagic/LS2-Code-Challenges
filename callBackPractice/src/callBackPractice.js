/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:

 You would then define the greeting function to make the invocation work.
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });

 // NEXT EXAMPLE
 *const greeting = (num, cb) => {
 *    cb(num + 1);
 *  };
 *
 *  greeting( 4, (num) => {
 *     console.log(num);
 *  });
 *  
 *
 */
// to test this file cd into the directory where its found it in the command line and run node callBackPractice.js
// or you can copy and paste your functions into the Chrome console or JSBin for testing.
// console.log will be your best friend here!
const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];
// Write a function called firstItem that passes the first item of the given array to the callback function

const cb = () => {

}
const firstItem = (array, cb) => {
  
  const cb = (array) => {
  	return array[0];
  }
});

// Write a function called getLength that passes the length of the array into the callback
// write code here

const getLength = (arr, anything => {
    
    let newArray = array.length;

  	anything(newArray);

});

getLength(foods, (newArray) => {
	console.log('the length of the array is: ');
});

// Write a function called last which passes the last item of the array into the callback
// write code here
const last = (array, () => {

  return array[array.length - 1];
});

// Write a function called sumNums that adds two numbers and passes the result to the callback

// write code here
const sumNums = (a, b, () => {
  
  return a + b;	
});

sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});)

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
// write code here


// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

// write code here
const contains = (item, arr, cb) => {
	cb(arr.includes(item));
}


// // Write a function called removeDuplicates that removes all duplicate values from the given array.
// // Pass the array to the callback function.  Do not mutate the original array.

const removeDuplicates = (arr, cb) => {

};

const removeDuplicates(foods, (uniqueFoods) => {

});

// // // Write a function called each that iterates over the provided array and passes the value and index into the callback.

const each = (arr, cb) => {

};

each(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});