// Function 1: scuberGreetingForFeet
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 2500) {
    return "No can do.";
  } else if (someValue > 2000) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "That will be twenty bucks.";
  }
}

// Function 2: ternaryCheckCity
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// Function 3: switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// Test the functions manually
console.log(scuberGreetingForFeet(199));  // "This one is on me!"
console.log(scuberGreetingForFeet(2501));  // "No can do."
console.log(scuberGreetingForFeet(2100));  // "I will gladly take your thirty bucks."
console.log(scuberGreetingForFeet(500));   // "That will be $20."

console.log(ternaryCheckCity("NYC"));  // "Ok, sounds good."
console.log(ternaryCheckCity("Los Angeles"));  // "No go."

console.log(switchOnCharmFromTip("generous"));  // "Thank you so much."
console.log(switchOnCharmFromTip("not as generous"));  // "Thank you."
console.log(switchOnCharmFromTip("average"));  // "Bye."
