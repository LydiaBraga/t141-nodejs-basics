const usefulString = require('useful-string');
const _ = require('lodash');

console.log(usefulString.toCamelCase("lydia-braga"));

_.times(4, () => {
    console.log("id: ", usefulString.guid());
});