// a new event would clear the interval set by last event, and start the new event.
// only after the successful completion of the interval the function would be executed

const apiCall = () => {};

const debounce = (func, delay = 300) => {
  let IntervalId;
  return function () {
    const context = this;
    const args = arguments;
    clearInterval(IntervalId);
    IntervalId = setInterval(() => func.apply(context, args), delay);
  };
};

debounce(() => apiCall);
