var count = document.getElementById('count');
var input = document.getElementById('input');
var globalWordCounter = 0;
var WORD_LIMIT = 200;

input.addEventListener('keydown', function(event) {
  if (globalWordCounter > WORD_LIMIT && event.code !== "Backspace") {
    e.preventDefault();
    return alert("You have reached the word limit");
  }
});

input.addEventListener('keyup', function(event) {
  wordCounter(event.target.value);
});

function isWord(str) {

  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
      return true;
    }
  }
  return false;
}

function wordCounter(text) {
  var text = input.value.split(' ');
  var wordCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (!text[i] == ' ' && isWord(text[i])) {
      wordCount++;
    }
  }
  globalWordCounter = wordCount;
  count.innerText = wordCount;
}
