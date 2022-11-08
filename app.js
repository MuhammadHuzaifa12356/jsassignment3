//  chapter 15
var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";
// alert("Welcome to " + city3);
var cities = [
  "Atlanta",
  "Baltimore",
  "Chicago",
  "Denver",
  "Los Angeles",
  "Seattle",
];
// alert("Welcome to " + cities[2]);
var mixedArray = [1, "Bob", "Now is", true];
console.log(mixedArray);

///////////////////////////////////////////////////////////////////////
//  chapter 16
var pets = [];
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "lizard";
pets[6] = "snake";
//   pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
//   pets[6] = "snake";
pets.pop();
pets.push("fish", "ferret");
console.log(pets);
///////////////////////////////////////////////////////////////////////

//  chapter 17
pets.shift();
pets.unshift("fish", "ferret");
pets.splice(2, 2, "pig", "duck", "emu");
pets.splice(2, 0, "pig", "duck", "emu");
pets.splice(2, 2);
var noPets = pets.slice(2, 4);
console.log(pets);

///////////////////////////////////////////////////////////////////////
//  chapter 18

var cleanestCities = [
  "Cheyenne",
  "Santa Fe",
  "Tucson",
  "Great Falls",
  "Honolulu",
];
var cityToCheck = "Santa Fe";
if (cityToCheck === cleanestCities[0]) {
  alert("It's one of the cleanest cities");
} else if (cityToCheck === cleanestCities[1]) {
  alert("It's one of the cleanest cities");
} else if (cityToCheck === cleanestCities[2]) {
  alert("It's one of the cleanest cities");
} else if (cityToCheck === cleanestCities[3]) {
  alert("It's one of the cleanest cities");
} else if (cityToCheck === cleanestCities[4]) {
  alert("It's one of the cleanest cities");
} else {
  alert("It's not on the list");
}
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    alert("It's one of the cleanest cities");
  }
}

///////////////////////////////////////////////////////////////////////
//  chapter 19

var matchFound = "no";
var matchFound = "no";
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = "yes";
    alert("It's one of the cleanest cities");
  }
}
if (matchFound === "no") {
  alert("It's not on the list");
}
var matchFound = false;
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
  }
}
if (matchFound === false) {
  alert("It's not on the list");
}
var matchFound = false;
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
  }
}
if (matchFound === false) {
  alert("It's not on the list");
}
var numElements = cleanestCities.length;
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  alert("It's not on the list");
}

///////////////////////////////////////////////////////////////////////
//  chapter 20
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
