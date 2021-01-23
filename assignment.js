//kilometer to meter converter
function kilometerToMeter(distanceInKM) {
  if (distanceInKM < 0) {
    return "Distance can not be a negative value";
  } else if (typeof distanceInKM !== "number") {
    return "Please enter a valid number";
  }
  return distanceInKM * 1000; // convert kilometer to meter
}
//==//

//budget calculator
function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop) {
  //this part checks error
  if (numOfWatch < 0 || numOfMobile < 0 || numOfLaptop < 0) {
    return "Quantity can not be negative";
  } else if (
    typeof numOfWatch !== "number" ||
    typeof numOfMobile !== "number" ||
    typeof numOfLaptop !== "number"
  ) {
    return "All perameter should be valid number";
  }

  //calculate budget
  let watchPrice = numOfWatch * 50;
  let mobilePrice = numOfMobile * 100;
  let laptopPrice = numOfLaptop * 500;

  return watchPrice + mobilePrice + laptopPrice;
}
//==//

//hotel cost calculator
function hotelCost(lengthOfStay) {
  if (lengthOfStay < 0) {
    return "Length of stay can not be negative"; //error message
  } else if (lengthOfStay !== "number") {
    return "Please enter a valid number"; //error message
  } else if (lengthOfStay <= 10) {
    return lengthOfStay * 100; //1st case 10 days
  } else if (lengthOfStay <= 20) {
    return 10 * 100 + (lengthOfStay - 10) * 80; //2nd case in between 10 to 20 days
  } else {
    return 10 * 100 + 10 * 80 + (lengthOfStay - 20) * 50; // 3rd case more than 20 days
  }
}
//==//

//returns the biggest string from an array
function megaFriend(arrayOfFriends) {
  let megaName = "";
  let checkError = false;

  for (let i = 0; i < arrayOfFriends.length; i++) {
    //checks if any index of the array contains anything other than string
    if (typeof arrayOfFriends[i] !== "string") {
      checkError = true;
      break;
    }

    //sets largest string in megaName variable
    if (megaName.length <= arrayOfFriends[i].length) {
      megaName = arrayOfFriends[i];
    }
  }

  if (checkError) {
    return "All name should be in string";
  } else {
    return megaName;
  }
}
//==//
