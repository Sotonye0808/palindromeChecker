document.getElementById("check-btn").addEventListener("click", function() {
    const userInput = document.getElementById("text-input").value;
    const resultDiv = document.getElementById("result");

    // Check if user input is empty
    if (userInput.trim() === "") {
        alert("Please input a value");
        return;
    }

    // Function to remove non-alphanumeric characters and convert to lowercase
    function cleanString(str) {
        return str.replace(/[\W_]/g, '').toLowerCase();
    }

    // Function to check if a string is a palindrome
    function isPalindrome(str) {
        const cleanedStr = cleanString(str);
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }

    // Check if input is a palindrome and display result
    if (isPalindrome(userInput)) {
        resultDiv.textContent = userInput + " is a palindrome";
    } else {
        resultDiv.textContent = userInput + " is not a palindrome";
    }
});