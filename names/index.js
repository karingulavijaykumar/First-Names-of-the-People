const peopleNameList = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

function getPeopleInCity(peopleNameList) {
  return getFirstNames(peopleNameList);
}

module.exports = getPeopleInCity;
