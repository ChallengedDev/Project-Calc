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
const hist = document.querySelector(".replay");
const historyButton = document.querySelector("#history");
const mainInput = document.querySelector(".input");
// console.log(mainInput);

const backup = [];

//padInputs
let leftPadInput = "";
let rightPadInput = "";

const x = "abcde";
console.log(x.slice(0, x.length - 1));

// //focus testing
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
    console.log(Number(e.target.textContent + ".1"), "is my value");
    if (focusTester[0] === "left") {
      //   console.log("left");
      leftInput.focus();
      leftPadInput += e.target.textContent;
      console.log(leftPadInput);
      leftInput.value = Number(leftPadInput);
    } else if (focusTester[0] === "right") {
      rightInput.focus();
      console.log("right");
      rightPadInput += e.target.textContent;
      console.log(rightPadInput);
      rightInput.value = Number(rightPadInput);
    } else {
      console.log("t0: ");
    }
  };
});

//deleting inputs from pad
leftInput.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    leftPadInput = leftPadInput.slice(0, leftPadInput.length - 1);
  }
});

//setting up event for reset button
reset.addEventListener("click", () => {
  leftInput.value = "";
  rightInput.value = "";
  leftPadInput = "";
  rightPadInput = "";

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

//function key definitions
functionKeysArray.forEach((func) => {
  func.addEventListener("click", (e) => {
    let left = Number(leftInput.value);
    let right = Number(rightInput.value);

    switch (e.target.id) {
      case "add":
        if (backup.length === 0) {
          console.log(e.target.id);
          sign.value = "+";
          backup.push(left + right);
          //   leftClock.length = rightClock.length = 0;
          //   leftCount.length = rightCount.length = 0;

          // leftClock.push("")
          //    rightClock.push("")
          ans.value = backup[0].toFixed(1);
          // hist.innerHTML = `yuyu`
          hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
        } else {
          rightInput.focus();
          sign.value = "+";
          leftPadInput = "";
          rightPadInput = "";
          rightInput.value = "";
          backup.push(left + right);
          ans.value = backup.reverse()[0].toFixed(1);
          leftInput.value = ans.value;
          hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
        }

        break;
      case "subtract":
        console.log(e.target.id);
        if (backup.length === 0) {
          console.log(e.target.id);
          sign.value = "-";
          backup.push(left - right);

          ans.value = backup[0].toFixed(1);
          hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
        } else {
          rightInput.focus();
          sign.value = "-";
          leftPadInput = "";
          rightPadInput = "";
          rightInput.value = "";
          backup.push(left - right);

          ans.value = backup.reverse()[0].toFixed(1);
          leftInput.value = ans.value;
          hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
        }

        break;
      case "divide":
        console.log(e.target.id);
        if (right !== 0) {
          if (backup.length === 0) {
            sign.value = "/";
            backup.push(left / right);

            ans.value = backup[0].toFixed(1);
            hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
          } else {
            rightInput.focus();
            rightInput.value = "";
            sign.value = "/";

            backup.push(left / right);

            ans.value = backup.reverse()[0].toFixed(1);
            leftInput.value = ans.value;
            leftPadInput = "";
            rightPadInput = "";
            hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
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

          ans.value = backup[0].toFixed(1);
          hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
        } else {
          rightInput.focus();
          sign.value = "x";
          leftPadInput = "";
          rightPadInput = "";
          rightInput.value = "";
          backup.push(left * right);
          ans.value = backup.reverse()[0].toFixed(1);
          leftInput.value = ans.value;
          hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
        }

        break;
      case "percentage":
        console.log(e.target.id);

        if (left >= 0 && right > 0) {
          if (backup.length === 0) {
            sign.value = "%";
            backup.push(left % right);

            ans.value = Math.round(backup[0]);
            hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
          } else {
            rightInput.focus();
            sign.value = "%";

            rightInput.value = "";
            leftPadInput = "";
            rightPadInput = "";
            backup.push(left % right);
            ans.value = Math.round(backup.reverse()[0]);
            leftInput.value = ans.value;
            hist.innerHTML += `<code> ${left} ${sign.value} ${right} = ${ans.value} </code><br>`;
          }
        } else {
          info.innerHTML = `<span class="inf" style="font-size: 16px"><b>num2</b> must be zero or positive.</span>`;
            
        }

        break;
      //   case "equal":
      //     console.log(e.target.id);

      //     break;
      //   case "memory":
      //     console.log(e.target.id);

      //     break;
      case "history":
        console.log(e.target.id, "222");
        hist.classList.toggle("show");
        historyButton.classList.toggle("show2");
        mainInput.classList.toggle("hide");
        // = ${ans.value}
        break;

      default:
        break;
    }
  });
});

//do this 1second after the page loads
window.onload = function () {
  setTimeout(() => {
    leftInput.focus();
  }, 1000);
};
