// Code your solution in this file!
function returnFirstTwoDrivers(Antonia, Nuru, Amari, Mo) {
    let ppl = ["Antonia", "Nuru", "Amari", "Mo"]
    const firstTwo = ppl.slice(0, 2);
    return firstTwo;
}
function returnLastTwoDrivers(Antonia, Nuru, Amari, Mo) {
    let ppl = ["Antonia", "Nuru", "Amari", "Mo"]
    const lastTwo = ppl.slice(2, 4)
    return lastTwo;
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
];

function createFareMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;
    }
}
function fareDoubler(num) {
    const fare = num * 2;
    return fare;
}

function fareTripler(num) {
    const fare = num * 3;
    return fare;
}

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
  
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(drivers.length - 2);
  }
  
  