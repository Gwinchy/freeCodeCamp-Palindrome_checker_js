// JavaScript code for the Palindrome Checker functionality
console.log('helloWorld');
// Add event listener to the button with id "check-btn"
document.getElementById('check-btn').addEventListener('click', function() {
    // Get the value of the input field with id "text-input" and trim any leading/trailing whitespace
    const inputText = document.getElementById('text-input').value.trim();
    
    // Get the div element with id "result"
    const resultDiv = document.getElementById('result');

    // If the input is empty, display an alert and return
    if (inputText === '') {
        alert('Please input a value');
        return;
    }

    // Clean the input by converting to lowercase and removing non-alphanumeric characters
    const cleanInput = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the cleaned input is a palindrome
    const isPalindrome = (str) => {
        return str === str.split('').reverse().join('');
    };

    // Display the result based on whether the input is a palindrome or not
    if (isPalindrome(cleanInput)) {
        resultDiv.textContent = inputText + ' is a palindrome';
    } else {
        resultDiv.textContent = inputText + ' is not a palindrome';
    }
});