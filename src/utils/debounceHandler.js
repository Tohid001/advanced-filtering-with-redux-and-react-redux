const debounceHandler = (fn, delay) => {
  let timeoutId;
  return function () {
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

export default debounceHandler;
