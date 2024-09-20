document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
  
    // Check if input is empty
    if (inputText.trim() === '') {
      alert('Please input a value');
      return;
    }
  
    const formattedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lower case
    const reversedText = formattedText.split('').reverse().join(''); // Reverse the string
  
    // Check if the text is a palindrome
    if (formattedText === reversedText) {
      resultElement.textContent = `${inputText} is a palindrome`;
    } else {
      resultElement.textContent = `${inputText} is not a palindrome`;
    }
  });
  