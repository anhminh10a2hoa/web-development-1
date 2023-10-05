/**
 * Implement an async function 'f' that returns the value of a parameter inside a Promise.
 * @param {number} value - Must be a number.
 * @throws an error if the parameter 'value' is not a number. The thrown error message must be 'Parameter is not a number!'.
 * @returns a new Promise that resolves to the parameter value.
 */
const f = (value) => {
  return new Promise((resolve, reject) => {
    if (typeof value !== 'number' || isNaN(value)) {
      reject("Parameter is not a number!");
    } else {
      resolve(value);
    }
  });
}

/**
 * Implement an async function 'g' that calls the previously made async function 'f'.
 * Use `await` to wait for the result of 'f' and return the natural logarithm (Math.log()) of 'f's value.
 * Handle exceptions gracefully by returning the thrown error message with catch().
 * @param {number} value
 */
const g = async (value) => {
  try {
    const result = await f(value);
    return Math.log(result);
  } catch (error) {
    return error;
  }
}

/**
 * Implement an async function 'checkIfFunction' that checks the type of a parameter.
 * Use `typeof` to check if the value is a function.
 * @param {*} param - The value to be checked for being a function.
 * @returns a resolved Promise with value `true` if the parameter is a function or a rejected Promise with message "Not a function!" otherwise.
 */
const checkIfFunction = (param) => {
  return new Promise((resolve, reject) => {
    if (typeof param === 'function') {
      resolve(true);
    } else {
      reject("Not a function!");
    }
  });
}

/**
 * Implement a function 'p' that returns a resolved Promise after a given time.
 * If time > 2000 milliseconds, the Promise must be rejected with the message "Too long time!".
 * If time is not a number, the Promise must be rejected with the message "Not a number!".
 * @param {number} time
 * @returns {Promise} - Resolved or rejected Promise based on the conditions.
 */
const p = (time) => {
  return new Promise((resolve, reject) => {
    if (typeof time !== 'number' || isNaN(time)) {
      reject("Not a number!");
    } else if (time > 2000) {
      reject("Too long time!");
    } else {
      setTimeout(() => {
        resolve();
      }, time);
    }
  });
};

// Export the functions for testing
exports.f = f;
exports.g = g;
exports.checkIfFunction = checkIfFunction;
exports.p = p;
