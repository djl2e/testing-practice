class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function createCalculator() {
  return new Calculator;
}

function getNextChar(chr) {
  let charCode = chr.charCodeAt(0);
  if (charCode === 122) {
    charCode = 97;
  } else if (charCode === 90) {
    charCode = 65;
  } else {
    charCode++;
  }
  return String.fromCharCode(charCode);
}

function checkChar(chr) {
  return chr.match(/[a-zA-Z]/i);
}

function caesarCipher(str) {
  let new_str = []
  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    if (checkChar(chr)) {
      chr = getNextChar(chr);
    }
    
    new_str.push(chr);
  }
  return new_str.join('');
}

function analyzeArrays(nums) {
  let sum = 0
  let max = -Infinity;
  let min = Infinity;
  let count = 0;

  nums.forEach((num) => {
    sum += num;
    max = Math.max(num, max);
    min = Math.min(num, min);
    count++;
  })

  return {
    average: sum / count,
    min: min,
    max: max,
    length: count,
  }
}

export { capitalize,reverseString, createCalculator, caesarCipher, analyzeArrays }