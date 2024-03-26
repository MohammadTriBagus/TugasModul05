function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const expression = document.getElementById('display').value;
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}