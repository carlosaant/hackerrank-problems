//========================DIAGONAL DIFERENCE=======================
let matriz = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

const problem_1 = document.getElementById('out_problem1');
problem_1.textContent = diagonalDifference(matriz);

console.log(matriz);
// console.log(diagonalDifference(matriz));

function diagonalDifference(arr) {
  // Write your code here
  let right_diagonal = 0;
  let left_diagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    right_diagonal += arr[i][i];
    left_diagonal += arr[i][arr.length - i - 1];
  }
  return Math.abs(right_diagonal - left_diagonal);
}

//===================== Sales by Match ==========================

let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const problem_2 = document.getElementById('out_problem2');
problem_2.textContent = socker(n, ar);

function socker(n, ar) {
  let pairSocks = 0;
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let j = i; j < n; j++) {
      if (ar[i] == ar[j]) {
        s++;
      }
    }
    if (s % 2 == 0) {
      pairSocks++;
    }
  }
  return pairSocks;
}
//====================TIME CONVERSION==========================

let s = '07:05:45PM';

const problem_3 = document.getElementById('out_problem3');
problem_3.textContent = timeConversion(s);

function timeConversion(s) {
  let newTime;
  s = s.split(':');
  //hora + 12  = novo formato
  let hour = parseInt(s[0]);
  let secs = s[2].slice(0, 2);
  let time = s[2].slice(2);
  if (time === 'PM' && hour !== 12) {
    hour += 12;
  } else if (time === 'AM' && hour === 12) {
    hour = '00';
  } else if (hour < 10) {
    hour = '0' + hour.toString();
  } else {
    hour = hour.toString();
  }

  newTime = (hour + ':' + s[1] + ':' + secs).toString();

  return newTime;
}

//============== final grade students====================
let grade = [73, 67, 38, 33];

const problem_4 = document.getElementById('out_problem4');
problem_4.textContent = gradingStudents(grade);

function gradingStudents(grades) {
  // Write your code here
  let finalGrade = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] % 5 !== 0) {
      let nextNumber = 0;
      for (let j = grades[i]; j < 100; j++) {
        if (j % 5 === 0) {
          nextNumber = j;
          break;
        }
      }
      if (nextNumber - grades[i] < 3 && nextNumber >= 40) {
        finalGrade.push(nextNumber);
      } else {
        finalGrade.push(grades[i]);
      }
    } else {
      finalGrade.push(grades[i]);
    }
  }
  return finalGrade;
}

//==============================================
// let arr = [6, -4, 3, -9, 0, 4, 1];

// console.log(plusMinus(arr));

// function plusMinus(arr) {
//   // Write your code here
//   let positive = 0;
//   let negative = 0;
//   let zero = 0;
//   let n = arr.length;
//   console.log(n);
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > 0) {
//       positive++;
//     } else if (arr[i] < 0) {
//       negative++;
//     } else {
//       zero++;
//     }
//   }
//   console.log(
//     (positive / n).toFixed(6) +
//       '\n' +
//       (negative / n).toFixed(6) +
//       '\n' +
//       (zero / n).toFixed(6)
//   );
// }

// ================================================
// let n = 6;

// console.log(staircase(n));

// function staircase(n) {
//   // Write your code here
//   let linha = '';
//   for (let i = 1; i < n; i++) {
//     for (let s = n - 1; s >= i; s--) {
//       linha += ' ';
//     }
//     for (let h = 1; h <= i; h++) {
//       linha += ' #';
//     }
//     linha += '\n';
//     console.log(linha);
//   }
//   console.log(linha);
// }

//=========================================

// let arr = [1, 2, 3, 4, 5];

// function somaArr(total, num) {
//   return total + Math.round(num);
// }

// function miniMaxSum(arr) {
//   // Write your code here
//   let min = Infinity;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (var j = 0; j < arr.length; j++) {
//       if (i != j) {
//         sum += arr[j];
//       }
//     }
//     if (sum < min) min = sum;
//     if (sum > max) max = sum;
//   }

//   console.log(min + ' ' + max);
// }

//=========================================

// let candles = [44, 53, 31, 27, 77, 60, 66, 77, 26, 36];

// console.log(
//   'Candles: ' +
//     candles +
//     ' Quantidade velas altas: ' +
//     birthdayCakeCandles(candles)
// );

// function candlehight(candles) {
//   let highCandle = 0;
//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] >= highCandle) {
//       highCandle = candles[i];
//     }
//   }
//   return highCandle;
// }

// function birthdayCakeCandles(candles) {
//   let highCandle = candlehight(candles);
//   let cont = 0;
//   console.log(highCandle);
//   for (let i = 0; i < candles.length; i++) {
//     if (highCandle <= candles[i]) {
//       cont++;
//     }
//   }
//   return cont;
// }

// ===========================================
