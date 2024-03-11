document.addEventListener('DOMContentLoaded', function() {
  const calculatorResults = document.querySelector(".calculator-results");
  const numbers = document.querySelectorAll(".number");
  const actions = document.querySelectorAll(".divide, .multiply, .subtract, .sum");
  const clearButton = document.getElementById("clear");
  const equalButton = document.getElementById("equal");

  let firstNumber = '';
  let secondNumber = '';
  let action = '';
  let isActionSelected = false;
  let isResultDisplayed = false;

  numbers.forEach(function(number) {
    number.addEventListener('click', function() {
      if (isResultDisplayed) {
        clearResult();
        isResultDisplayed = false;
      }
      if (isActionSelected) {
        calculatorResults.innerHTML = '';
        isActionSelected = false;
      }
      calculatorResults.innerHTML += number.innerHTML;
    });
  });

  actions.forEach(function(actionBtn) {
    actionBtn.addEventListener('click', function() {
      if (calculatorResults.innerHTML !== '') {
        firstNumber = calculatorResults.innerHTML;
        action = actionBtn.innerHTML;
        isActionSelected = true;
      }
    });
  });

  clearButton.addEventListener('click', function() {
    clearResult();
  });

  equalButton.addEventListener('click', function() {
    secondNumber = calculatorResults.innerHTML;
    doCalculation();
  });

  function clearResult() {
    calculatorResults.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    action = '';
    isActionSelected = false;
  }

  function doCalculation() {
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      result = 'Invalid input';
    } else {
      if (action === '+') {
        result = num1 + num2;
      } else if (action === '-') {
        result = num1 - num2;
      } else if (action === '×') {
        result = num1 * num2;
      } else if (action === '÷') {
        if (num2 === 0) {
          result = 'Divide by zero';
        } else {
          result = num1 / num2;
        }
      } else {
        result = 'Invalid action';
      }
    }

    calculatorResults.innerHTML = result;
    firstNumber = '';
    secondNumber = '';
    action = '';
    isActionSelected = false;
    isResultDisplayed = true;
  }
});
