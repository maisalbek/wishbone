// let answer = "wars";
// let mistakes = 0;
// let guessed_letters = [];
// let entered_words = [];
// wordStatus = "";

// function Hangman(inpletter) {
//   guessed_letters.indexOf(inpletter) === -1
//     ? guessed_letters.push(inpletter)
//     : null;
//   if (answer.indexOf(inpletter) >= 0) {
//     checkword();
//     checkanswer();
//   } else if (answer.indexOf(inpletter) === -1) {
//     entered_words.push(inpletter);
//     mistakes++;
//     checkanswer();
//     checkword();
//   }
// }
// function checkword() {
//   wordStatus = answer
//     .split("")
//     .map((letter) => (guessed_letters.indexOf(letter) >= 0 ? letter : " _ "))
//     .join("");
//   let tries = entered_words.join(",");
//   tries.length !== 0
//     ? console.log(wordStatus + "#" + tries)
//     : console.log(wordStatus);
// }
// function checkanswer() {
//   if (answer === wordStatus) {
//     console.log("You found the word!", `"${answer}"`);
//     wordStatus = "";
//   } else if (mistakes > 5) {
//     console.log("You got hung! The word was", `"${answer}"`);
//     wordStatus = "";
//   }
// }

// function narcissistic(value) {
//   let sum = 0;
//   let arr = value.toString().split("");
//   let arr_length = arr.length;
//   arr.forEach((i) => {
//     sum = sum + parseInt(i) ** arr_length;
//   });
//   if (sum === value) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(narcissistic(153));

// function sd(value) {
//   let sum = [];
//   if (value == 0) return 0;
//   else {
//     value
//       .toString()
//       .split("")
//       .filter((i) => {
//         sum.push(parseInt(i) ** 2);
//       });
//     return parseInt(sum.join(""));
//   }
// }
// console.log(sd(1112));

// function findOdd(a) {
//   for (let i = 0; i < a.length; i++) {
//     let count = 0;
//     for (let j = 0; j < a.length; j++) {
//       if (a[i] == a[j]) count++;
//     }
//     if (count % 2 != 0) return a[i];
//   }
// }
// console.log(findOdd([0]));

// function divisibleCount(x, y, k) {
//   let count = 0;
//   for (let i = x; i <= y; i++) {
//     if (i % k === 0 && i !== 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(divisibleCount(0, 1, 7));

// function addAll(numbers) {
//   let cost = 0;
//   while (numbers.length > 1) {
//     numbers.sort((a, b) => a - b);
//     numbers[1] = numbers[0] + numbers[1];
//     cost += numbers[1];
//     numbers.shift();
//   }
//   return cost;
// }
// console.log(addAll([1, 2, 3, 4, 5]));

// function humanReadable(seconds) {
//   let levels = [
//     Math.floor(((seconds % 31536000) % 86400) / 3600),
//     Math.floor((((seconds % 31536000) % 86400) % 3600) / 60),
//     (((seconds % 31536000) % 86400) % 3600) % 60,
//   ];
//   if (seconds >= 86400) levels[0] = Math.floor(seconds / 3600);
//   let hours =
//     levels[0] === 0
//       ? "00"
//       : levels[0].toString().length === 1
//       ? "0" + levels[0].toString()
//       : levels[0].toString();
//   let minutes =
//     levels[1] === 0
//       ? "00"
//       : levels[1].toString().length === 1
//       ? "0" + levels[1].toString()
//       : levels[1].toString();
//   let second =
//     levels[2] === 0
//       ? "00"
//       : levels[2].toString().length === 1
//       ? "0" + levels[2].toString()
//       : levels[2].toString();
//   let show = hours + ":" + minutes + ":" + second;
//   return show.toString();
// }
// console.log(humanReadable(3700));

// function validParentheses(parens) {
//   let arr = parens.split("");
//   let right = [];
//   let left = [];
//   if (arr.length % 2 !== 0) {
//     return false;
//   } else {
//     arr.forEach((i) => {
//       if (i == "(") {
//         left.push(i);
//       } else if (i == ")") {
//         right.push(i);
//       }
//     });
//   }
//   if (left.length === right.length) return true;
//   else return false;
// }
// console.log(validParentheses("())("));

// const validParentheses = (s) => {
//   const arr = [];
//   for (let i = 0; i < s.length; i++) {
//     let top = arr[arr.length - 1];
//     if (s[i] === "(") {
//       arr.push(s[i]);
//     } else if (s[i] === ")" && top === "(" && arr.length !== 0) {
//       arr.pop();
//     } else {
//       return false;
//     }
//   }
//   console.log(arr.length);
//   return arr.length === 0;
// };
// console.log(validParentheses("()()"));

// const alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// function alphabetPosition(text) {
//   let arr = [];
//   text = text.toLowerCase();
//   for (let i = 0; i < text.length; i++) {
//     if (alphabet.indexOf(text[i]) !== -1) {
//       arr.push(alphabet.indexOf(text[i]) + 1);
//     }
//   }
//   return arr.join(" ");
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// function towerBuilder(nFloors) {
//   let str = "";
//   let arr = [];
//   for (let i = 1; i <= nFloors; i++) {
//     for (let j = 1; j <= nFloors - i; j++) {
//       str += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       str += "*";
//     }
//     for (let z = 1; z <= nFloors - i; z++) {
//       str += " ";
//     }
//     str += "/";
//     arr.push(str);
//   }
//   let arr2 = arr[arr.length - 1].split("/");
//   arr2.pop();
//   return arr2;
// }
// console.log(towerBuilder(5));
// function queueTime(customers, n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(0);
//   }
//   for (let j = 0; j < customers.length; j++) {
//     let idx = arr.indexOf(Math.min(...arr));
//     arr[idx] += customers[j];
//   }
//   return Math.max(...arr);
// }
// console.log(queueTime([10, 2, 3, 3], 2));

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function pigIt(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes("!", "?")) {
      arr[i].substring(1) += arr[i][0]
      console.log(arr[i]);
    }
  }
}
pigIt("Hello world !");
