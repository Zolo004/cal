const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const clearButton = document.getElementById('clear');


let currentInput = '';


buttons.forEach(button => {
  button.addEventListener('click', () => {
      const value = button.innerText;
      
      if (value === 'C') {
          currentInput = '';
      } else if (value === '=') {
          try {
              currentInput = eval(currentInput).toString(); 
          } catch (e) {
              currentInput = 'Error';
          }
      } else {
          currentInput += value;
      }
      
      display.value = currentInput; 
  });
});
