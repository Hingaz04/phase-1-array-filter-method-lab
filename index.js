const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(){
  
    const lowerCaseName = name.toLowerCase();
  
    const matchingDrivers = drivers.filter(driver => {
      const lowerCaseDriverName = driver.toLowerCase();
      
      return lowerCaseDriverName.includes(lowerCaseName);
    });
  
    return matchingDrivers;
}


function fuzzyMatch(drivers, letters) {
 
  const matchingDrivers = drivers.filter(driver => {
  
    return driver.toLowerCase().startsWith(letters.toLowerCase());
  });

  return matchingDrivers;
}

function matchName(drivers, name) {

  const matchingDrivers = drivers.filter(driver => {
  
    return driver.name.toLowerCase() === name.toLowerCase();
  });

  return matchingDrivers;
}
// Code your solution here
