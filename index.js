
function findMatching(list, driver){
    const newList = list.filter(name => name.toLowerCase() === driver.toLowerCase())
    return newList;
}

function fuzzyMatch(drivers, letters){
    const newDrivers = drivers.filter(first3 => first3.slice(0, 2) === letters);
    return newDrivers;
}

function matchName(drivers, string){
    const newDrivers = drivers.filter(list => list.name === string);
    return newDrivers;
}