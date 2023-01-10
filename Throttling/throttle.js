const apiCall = () => {};

const throttle = (func, delay = 300) => {
  let lastRun = 0;
  return function () {
    const context = this;
    const args = arguments;

    // Setting current time of execution
    const now = new Date();

    // if difference between previous and current
    // time of function is greater, then delay the execution
    if (now - lastRun < delay) {
      return;
    }

    // set current time as last executed time and proceed
    // for execution
    lastRun = now;
    return func.apply(context, args);
  };
};

throttle(() => apiCall);
