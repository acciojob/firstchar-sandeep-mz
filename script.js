function firstChar(text) {
  // your code here
   input = input.trim();

  // Check if the trimmed input is not empty
  if (input !== "") {
    // Return the first character of the trimmed input
    return input[0];
  } else {
    // If the trimmed input is empty, return an empty string
    return "";
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
