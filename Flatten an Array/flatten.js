const flattenArray = (input) => {
  let res = [];

  // for checking if item is array or not
  if (!Array.isArray(input)) {
    return input;
  }

  input.forEach((item) => {
    res = res.concat(flattenArray(item));
  });

  return res;
};
