const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById('text-input');
const result = document.getElementById("result");

   checkButton.addEventListener("click", () => {
     if (inputText.value === "") {
       alert("Please input a value");
     }
     else if (inputText.value.length = 1) {
       result.innerText = inputText.value + " is a palindrome";
     }
const cleanText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
if (cleanText === [...cleanText].reverse().join("")) {
  result.innerText = inputText.value + " is a palindrome";
}
result.innerText = inputText.value + " is not a palindrome";
})