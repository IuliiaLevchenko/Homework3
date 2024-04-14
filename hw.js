function printFullObject(object) {
  console.log(object);
}
function printLastHobby(object) {
  // Get the hobbies array from the object
  let hobbies = object.hobbies;

  // Check if the hobbies array is not empty
  if (hobbies.length > 0) {
    // Get the last hobby from the array
    let lastHobby = hobbies[hobbies.length - 1];
    // Output the last hobby
    console.log("Last Hobby:", lastHobby);
  } else {
    console.log("No hobbies found.");
  }
}
function printFormattedAddress(object) {
  // Get the address object from the main object
  let address = object.address;

  // Construct the formatted address string
  let formattedAddress = `${address.street}, ${address.city}`;

  // Output the formatted address
  console.log("Formatted Address:", formattedAddress);
}
let object = {
  id: "0049",
  name: "Alice 49",
  address: {
    street: "1100 Main St",
    city: "City 100",
  },
  hobbies: ["Reading 49", "Hiking 49"],
};

printFullObject(object);
printLastHobby(object);
printFormattedAddress(object);
