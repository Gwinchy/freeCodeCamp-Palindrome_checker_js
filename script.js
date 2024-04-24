// JavaScript code for the Palindrome Checker functionality
alert('helloWorld');
// Add event listener to the button with id "check-btn"
const checkButton = document.getElementById("check-btn").addEventListener("click", function() {
    palindromeChecker();
});
// Get the value of the input field with id "text-input" and trim any leading/trailing whitespace

// Get the div element with id "result"
const displayResult = document.getElementById("result")
// If the input is empty, display an alert and return
function palindromeChecker() {
    const textInput = document.getElementById("text-input").value;
    if (textInput === "") {
        alert("sdsdsds");
        return;
    }
    displayResult.innerText("asaaaaaaaaaas");
}
// Clean the input by converting to lowercase and removing non-alphanumeric characters
// Check if the cleaned input is a palindrome
// Display the result based on whether the input is a palindrome or not
checkButton.addEventListener('click', palindromeChecker);
