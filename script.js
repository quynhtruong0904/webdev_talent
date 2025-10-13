function enterData() {
  let text = document.getElementById("inputText").value;
  document.getElementById("resultText").value = text;
  document.getElementById("info").innerText = "";
}

function showUppercase() {
  let text = document.getElementById("inputText").value;
  document.getElementById("resultText").value = text.toUpperCase();
}

function showLowercase() {
  let text = document.getElementById("inputText").value;
  document.getElementById("resultText").value = text.toLowerCase();
}

function oneWordPerLine() {
  let text = document.getElementById("inputText").value.trim();
  let words = text.split(/\s+/);
  document.getElementById("resultText").value = words.join("\n");
}

function countWords() {
  let text = document.getElementById("inputText").value.trim();
  if (text === "") {
    document.getElementById("info").innerText = "Word count: 0";
    return;
  }
  let words = text.split(/\s+/);
  document.getElementById("info").innerText = "Word count: " + words.length;
}

function countUppercase() {
  let text = document.getElementById("inputText").value;
  let matches = text.match(/[A-Z]/g);
  let count = matches ? matches.length : 0;
  document.getElementById("info").innerText = "Uppercase letters: " + count;
}

function countLowercase() {
  let text = document.getElementById("inputText").value;
  let matches = text.match(/[a-z]/g);
  let count = matches ? matches.length : 0;
  document.getElementById("info").innerText = "Lowercase letters: " + count;
}

function showVowelsConsonants() {
  let text = document.getElementById("inputText").value;
  let vowels = text.match(/[aeiouAEIOU]/g);
  let consonants = text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
  let vowelCount = vowels ? vowels.length : 0;
  let consonantCount = consonants ? consonants.length : 0;
  document.getElementById("info").innerText =
    "Vowels: " + vowelCount + " | Consonants: " + consonantCount;
}
