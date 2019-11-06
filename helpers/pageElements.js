module.exports = function(tests) {
  return tests
    .map(test => {
      let obj = {};
      obj[test.title] = {
        button: `#${test.id}-btn`,
        message: `#${test.id}-message`
      };
      return obj;
    })
    .reduce((obj, item) => {
      obj[item.key] = item[Object.keys(obj)[pageElements.indexOf(item)]];
      return obj;
    });
};
