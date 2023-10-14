function firstChar(text) {
  // your code here
   const words = text.trim().split(" ");

  // Check if the trimmed input is not empty
  if (words.length > 0) {
    // Extract the first letter of the first word
    const firstLetter = words[0][0];
    return firstLetter;
  } else {
    // Return an empty string if there are no words
    return " ";
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
