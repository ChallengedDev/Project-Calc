//Value Declarations
//clock and padInput set to arrays so that they can concat themselves
const numbers = document.getElementsByClassName("number");
const leftInput = document.querySelector(".input0");
const rightInput = document.querySelector(".input3");
const sign = document.querySelector(".input1");
const ans = document.querySelector("#input2");
const info = document.querySelector(".info");
const reset = document.getElementById("reset");
const functionKeys = document.getElementsByClassName("function");
const ref = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(ref.reverse())
const backup = [];
console.log(backup.length);
// let typed = "";

//padInputs
let leftPadInput = [""];
let rightPadInput = [""];

//clocks
const leftClock = [""];
const rightClock = [""];
const timer = [""];

//focus testing
const focusTester = [""];

leftInput.onfocus = () => {
  focusTester.length = 0;
  focusTester.push("left");
  console.log(focusTester);
};

rightInput.onfocus = () => {
  focusTester.length = 0;
  focusTester.push("right");
  console.log(focusTester);
};

//collects the values for all number inputs and stores
const numbersTyped = Array.from(numbers);
// const numbersTyped = Array.from(numbers).splice(0, 10);

//when each number is pressed do this
//1. focus on the input field
//2.record the time at that point
//2. save the value typed in padInput
numbersTyped.forEach((number) => {
  number.onclick = function (e) {
    console.log(e);
    timer[0] = new Date();
    if (focusTester[0] === "left") {
      console.log("left");
      leftInput.focus();

      leftInput.value += e.target.textContent;

      leftPadInput = leftPadInput.concat(e.target.textContent);
    } else if (focusTester[0] === "right") {
      rightInput.focus();
      console.log("right");

      rightInput.value += e.target.textContent;

      rightPadInput = rightPadInput.concat(e.target.textContent);
    } else {
      console.log("t0: ");
    }
  };
});

//function to check if any key pressed is a number
const isaNumber = (input, array) => {
  return array.some((arrElt) => arrElt == input);
};

//reduces all array values to a single string
const reducer = (array) => {
  return array.reduce((a, b) => a + b, "");
};

//reset resets the input vlues to 0 by
//1. resetting both padInput and clock to and empty array
//2. push an empty string, not to leave the array empty
//it also displays a brief description of the reset function for two seconds

//displaying key inputs if they are numbers
//create new date for comparison reasons
//function takes in input since there are multiple inputs
//define one function and recall for all inputs
// let leftCount = [""]
//   let  rightCount = [""]

const [leftCount, rightCount] = [[""], [""]];
// console.log("cl: ",count.length)

function countDots(count) {
  let counted = 0;
  count.forEach((c) => {
    counted = c === "." ? counted + 1 : counted;
  });
  console.log(counted);

  return counted;
}
function countHyphen(count) {
  let counted = 0;
  count.forEach((c) => {
    counted = c === "-" ? counted + 1 : counted;
  });
  console.log(counted);

  return counted;
}

function inputFunction(input, clock, padInput, count) {
  return (e) => {
    timer[1] = new Date();

    clock.push("");

    //   const count = e.target.name === "left" ? leftCount : rightCount

    console.log("nestedC: ", count);
    // console.log("t1: ", timer[0]);

    //   const opp = Array.from(e.key);

    //   opp.forEach((letter) => {
    if (e.key === "Backspace") {
      console.log("exception");
      clock.pop();
      clock.push("");
      console.log(clock);
      return false;
    } else {
      console.log(e.key);

      if (isaNumber(e.key, ref) || e.key === "." || e.key === "-") {
        //for decimal
        e.key === "." ? count.push(".") : console.log("valid");

        //for negative
        e.key === "-" ? count.push("-") : console.log("valid");

        if (e.key === "." && countDots(count) < 2) {
          clock.push(clock[0].concat(e.key));
          console.log("value: ", reducer(clock));
        }
        if (e.key === "-" && countHyphen(count) < 2) {
          clock.push(clock[0].concat(e.key));
          console.log("value: ", reducer(clock));
        } else if (
          (e.key !== "." && e.key !== "-") ||
          countDots(count).length === 1 ||
          countHyphen(count).length === 1
        ) {
          console.log("iClock: ", clock);

          clock.push(clock[0].concat(e.key));
        }
      } else {
        clock.concat("");

        //throws error in info box if a letter is pressed
        info.innerHTML = `<span class="inf" style="font-size: 16px">No <b>letter</b> allowed.</span>`;

        setTimeout(() => {
          info.innerHTML = "Info text here.";
        }, 2000);
      }
    }

    if (timer[0] < timer[1]) input.value = reducer(padInput.concat(clock));
    else if (timer[0] > timer[1]) input.value = reducer(clock.concat(padInput));
    else console.log("wtf");
  };
}

//recording key strokes and passing to the inputs
leftInput.addEventListener(
  "keyup",
  inputFunction(leftInput, leftClock, leftPadInput, leftCount)
);
// setInterval(() => {
//   console.log("leftC: ", leftClock, "leftP: ", leftPadInput);
// }, 3000);

rightInput.addEventListener(
  "keyup",
  inputFunction(rightInput, rightClock, rightPadInput, rightCount)
);

// });

reset.addEventListener("click", () => {
  leftClock.length = rightClock.length = 0;
  leftPadInput.length = rightPadInput.length = 0;
  leftPadInput.push("");
  rightPadInput.push("");
  rightClock.push("");
  leftClock.push("");
  leftInput.value = "";
  rightInput.value = "";
  leftCount.length = rightCount.length = 0;
  // count.push("")
  console.log("newcount: ", leftCount, rightCount);
  leftInput.focus();
  info.innerHTML = `<span class="inf" style="font-size: 16px"><b>Reset</b> clears all containers.</span>`;
  backup.length = 0;
  ans.value = 0;

  setTimeout(() => {
    info.innerHTML = "Info text here.";
  }, 2000);
});

//key functiond
const functionKeysArray = Array.from(functionKeys);

functionKeysArray.forEach((func) => {
  //   console.log(key.id);
  func.addEventListener("click", (e) => {
    // console.log(e.target.id)

    let left = Number(leftInput.value);
    let right = Number(rightInput.value);

    switch (e.target.id) {
      case "add":
        if (backup.length === 0) {
          console.log(e.target.id);
          sign.value = "+";
          backup.push(left + right);
          leftClock.length = rightClock.length = 0;
          leftCount.length = rightCount.length = 0;

          // leftClock.push("")
          //    rightClock.push("")
          ans.value = backup[0].toFixed(1);
        } else {
          rightInput.focus();
          sign.value = "+";

          // leftInput.value = (backup.reverse())[0].toFixed(1)
          rightInput.value = "";
          // ans.value = 0
          backup.push(left + right);
          // backup.push(((backup.reverse())[0] + left))
          leftClock.length = rightClock.length = 0;
          ans.value = backup.reverse()[0].toFixed(1);
          leftInput.value = ans.value;
          leftCount.length = rightCount.length = 0;
        }

        // return console.log(left + right);
        break;
      case "subtract":
        console.log(e.target.id);
        if (backup.length === 0) {
          console.log(e.target.id);
          sign.value = "-";
          backup.push(left - right);
          leftClock.length = rightClock.length = 0;
          leftCount.length = rightCount.length = 0;

          ans.value = backup[0].toFixed(1);
        } else {
          rightInput.focus();
          sign.value = "-";

          rightInput.value = "";
          // ans.value = 0
          backup.push(left - right);
          leftClock.length = rightClock.length = 0;
          leftCount.length = rightCount.length = 0;

          ans.value = backup.reverse()[0].toFixed(1);
          leftInput.value = ans.value;

          // ans.value = (backup)[0].toFixed(1)
        }

        break;
      case "divide":
        console.log(e.target.id);
        if (right !== 0) {
          if (backup.length === 0) {
            sign.value = "/";
            backup.push(left / right);
            leftClock.length = rightClock.length = 0;
            leftCount.length = rightCount.length = 0;

            ans.value = backup[0].toFixed(1);
          } else {
            rightInput.focus();
            rightInput.value = "";
            sign.value = "/";

            // ans.value = 0
            backup.push(left / right);
            leftClock.length = rightClock.length = 0;
            leftCount.length = rightCount.length = 0;

            ans.value = backup.reverse()[0].toFixed(1);
            leftInput.value = ans.value;

            // ans.value = (backup.reverse())[0].toFixed(1)
          }
        } else {
          rightInput.focus();
          rightInput.style.borderColor = "red";
          info.innerHTML = `<span class="inf" style="font-size: 16px"><b>Denominator</b> must be non-zero.</span>`;
        }

        break;
      case "multiply":
        console.log(e.target.id);
        if (backup.length === 0) {
          sign.value = "x";
          backup.push(left * right);
          leftClock.length = rightClock.length = 0;
          leftCount.length = rightCount.length = 0;

          ans.value = backup[0].toFixed(1);
        } else {
          rightInput.focus();
          sign.value = "x";

          rightInput.value = "";
          // ans.value = 0
          backup.push(left * right);
          leftClock.length = rightClock.length = 0;
          ans.value = backup.reverse()[0].toFixed(1);
          leftInput.value = ans.value;
          leftCount.length = rightCount.length = 0;

          // ans.value = (backup)[0].toFixed(1)
        }

        break;
      case "percentage":
            console.log(e.target.id);
            if (backup.length === 0) {
          sign.value = "%";
          backup.push(left % right);
          leftClock.length = rightClock.length = 0;
          leftCount.length = rightCount.length = 0;

          ans.value = Math.round(backup[0]);
        } else {
          rightInput.focus();
          sign.value = "%";

          rightInput.value = "";
          // ans.value = 0
          backup.push(left % right);
          leftClock.length = rightClock.length = 0;
          ans.value = Math.round(backup.reverse()[0]);
          leftInput.value = ans.value;
          leftCount.length = rightCount.length = 0;

          // ans.value = (backup)[0].toFixed(1)
        }

        break;
      case "equal":
        console.log(e.target.id);

        break;
      case "reset":
        console.log(e.target.id);

        break;
      case "memory":
        console.log(e.target.id);

        break;
      case "history":
        console.log(e.target.id);

        break;

      default:
        break;
    }
  });
});

//do this 3seconds after the page loads
window.onload = function () {
  setTimeout(() => {
    leftInput.focus();
    console.log(leftInput);
    // input.value = "";
    // input.placeholder = "Micro Calculator";
  }, 3000);
};
