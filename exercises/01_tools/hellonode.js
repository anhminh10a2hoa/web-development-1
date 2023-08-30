const _ = require("lodash");

function hithere(array) {
  // Get the last and first items from the array using lodash
  const lastItem = _.last(array);
  const firstItem = _.head(array);

  // Concatenate the items with " and " in between
  const result = `${lastItem} and ${firstItem}`;

  return result;
}

module.exports = hithere;