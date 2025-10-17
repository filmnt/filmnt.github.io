document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleCalc');
  const calcContainer = document.getElementById('calcContainer');

  if (!toggleButton || !calcContainer) {
    return;
  }

  calcContainer.style.display = 'none';

  let calculatorInitialized = false;

  function initializeCalculator() {
    if (calculatorInitialized) return;

    const shadow = calcContainer.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .calculator {
          width: 280px;
          background-color: #2e2e2e;
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 0 8px rgba(0,0,0,0.5);
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }
        .display {
          background-color: #d0e0d0;
          height: 50px;
          margin-bottom: 6px;
          padding: 6px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: 'Courier New', monospace;
          font-size: 22px;
          text-align: right;
        }
        .display input {
          background: none;
          border: none;
          color: #000;
          font-family: inherit;
          font-size: 20px;
          text-align: right;
          width: 100%;
          outline: none;
        }
        .display .result {
          color: #000;
          font-size: 22px;
          overflow: hidden;
          white-space: nowrap;
        }
        .buttons {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 3px;
        }
        button {
          background-color: #4a4a4a;
          color: white;
          border: none;
          padding: 8px;
          font-size: 14px;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #5a5a5a;
        }
        button:active {
          background-color: #3a3a3a;
        }
        button:disabled {
          background-color: #333;
          opacity: 0.5;
          cursor: not-allowed;
        }
        .blue {
          background-color: #1a4971;
        }
        .blue:hover {
          background-color: #256598;
        }
        .blue:active {
          background-color: #123a5a;
        }
        .orange {
          background-color: #d35400;
        }
        .orange:hover {
          background-color: #e67e22;
        }
        .orange:active {
          background-color: #b34700;
        }
        .gray {
          background-color: #7f8c8d;
        }
        .gray:hover {
          background-color: #95a5a6;
        }
        .gray:active {
          background-color: #6c7a7b;
        }
        .calculator[data-theme="light"] {
          background-color: #e8e8e8;
        }
        .calculator[data-theme="light"] .display {
          background-color: #f5f5f5;
        }
        .calculator[data-theme="light"] .display input {
          color: #2b2b2b;
        }
        .calculator[data-theme="light"] .display .result {
          color: #2b2b2b;
        }
        .calculator[data-theme="light"] button {
          background-color: #b8b8b8;
          color: #2b2b2b;
        }
        .calculator[data-theme="light"] button:hover {
          background-color: #c8c8c8;
        }
        .calculator[data-theme="light"] button:active {
          background-color: #a8a8a8;
        }
        .calculator[data-theme="light"] button:disabled {
          background-color: #e5e5e5;
          opacity: 0.5;
          cursor: not-allowed;
        }
        .calculator[data-theme="light"] .blue {
          background-color: #4a7390;
          color: #ffffff;
        }
        .calculator[data-theme="light"] .blue:hover {
          background-color: #5c85a2;
        }
        .calculator[data-theme="light"] .blue:active {
          background-color: #3c6380;
        }
        .calculator[data-theme="light"] .orange {
          background-color: #e67e22;
          color: #ffffff;
        }
        .calculator[data-theme="light"] .orange:hover {
          background-color: #f2994a;
        }
        .calculator[data-theme="light"] .orange:active {
          background-color: #cc6b11;
        }
        .calculator[data-theme="light"] .gray {
          background-color: #a0c2ba;
          color: #2b2b2b;
        }
        .calculator[data-theme="light"] .gray:hover {
          background-color: #b0d2ca;
        }
        .calculator[data-theme="light"] .gray:active {
          background-color: #90b2aa;
        }
      </style>
      <div class="calculator" data-theme="dark">
        <div class="display">
          <input type="text" class="input">
          <div class="result">0</div>
        </div>
        <div class="buttons">
          <button class="gray" data-value="2nd">2nd</button>
          <button class="gray" data-value="pi">π</button>
          <button class="gray" data-value="e">e</button>
          <button class="gray" data-value="^">^</button>
          <button class="gray" data-value="()">( )</button>
          <button class="gray" data-value="sin">sin</button>
          <button class="gray" data-value="cos">cos</button>
          <button class="gray" data-value="tan">tan</button>
          <button class="gray" data-value="log">log</button>
          <button class="gray" data-value="ln">ln</button>
          <button class="gray" data-value="sinh">sinh</button>
          <button class="gray" data-value="cosh">cosh</button>
          <button class="gray" data-value="tanh">tanh</button>
          <button class="gray" data-value="nrt">n√</button>
          <button class="gray" data-value="fact">x!</button>
          <button class="gray" data-value="sqrt">√</button>
          <button class="gray" data-value="abs">|x|</button>
          <button class="gray" data-value="floor">[x]</button>
          <button class="gray" data-value="Rad" id="radButton">Rad</button>
          <button class="gray" data-value="CE">CE</button>
          <button class="blue" data-value="7">7</button>
          <button class="blue" data-value="8">8</button>
          <button class="blue" data-value="9">9</button>
          <button class="orange" data-value="/">÷</button>
          <button class="gray" data-value="DEL">DEL</button>
          <button class="blue" data-value="4">4</button>
          <button class="blue" data-value="5">5</button>
          <button class="blue" data-value="6">6</button>
          <button class="orange" data-value="*">×</button>
          <button class="gray" data-value="STO">STO</button>
          <button class="blue" data-value="1">1</button>
          <button class="blue" data-value="2">2</button>
          <button class="blue" data-value="3">3</button>
          <button class="orange" data-value="-">-</button>
          <button class="gray" data-value="RCL">RCL</button>
          <button class="blue" data-value="0">0</button>
          <button class="blue" data-value=".">.</button>
          <button class="blue" data-value="+/-">+/-</button>
          <button class="orange" data-value="+">+</button>
          <button class="gray" data-value="ENTER">=</button>
        </div>
      </div>
    `;

    let input = '';
    let displayInput = '';
    let result = '0';
    let isSecond = false;
    let isStoMode = false;
    let isRclMode = false;
    let lastResult = null;
    let isRadian = true;
    let memory = Array(10).fill(0);

    try {
      const storedMemory = localStorage.getItem('calculatorMemory');
      if (storedMemory) memory = JSON.parse(storedMemory);
    } catch {
      localStorage.setItem('calculatorMemory', JSON.stringify(memory));
    }

    const inputElement = shadow.querySelector('.input');
    const resultElement = shadow.querySelector('.result');
    const buttons = shadow.querySelectorAll('button');
    const radButton = shadow.querySelector('#radButton');

    function updateDisplay() {
      inputElement.value = displayInput || input;
      resultElement.textContent = result;
    }

    function handleInput(value) {
      if (!isStoMode && !isRclMode) {
        const validPattern = /^[0-9+\-*/().^sincostanloglneπsqrthabsfloornrt,]+$/;
        if (validPattern.test(value) || value === '') {
          input = value;
          displayInput = input;
          updateDisplay();
        } else {
          inputElement.value = input;
        }
      }
    }

    function handleKeydown(event) {
      if (event.key === 'Enter') {
        handleButton('ENTER');
        event.preventDefault();
      }
    }

    function countUnclosedParentheses(str) {
      return str.split('').reduce((count, char) => count + (char === '(' ? 1 : char === ')' ? -1 : 0), 0);
    }

    function autoCloseParentheses(str) {
      return str + ')'.repeat(Math.max(0, countUnclosedParentheses(str)));
    }

    function roundResult(value) {
      if (isNaN(value) || !isFinite(value)) return 'Error';
      return Math.round(value * 1e10) / 1e10;
    }

    function factorial(n) {
      n = Math.floor(n);
      if (n < 0) return NaN;
      if (n <= 1) return 1;
      return Array.from({length: n}, (_, i) => i + 1).reduce((a, b) => a * b);
    }

    function toggleNumberButtons(enable) {
      buttons.forEach(button => {
        const value = button.getAttribute('data-value');
        if (/^[0-9]$/.test(value)) {
          button.disabled = false;
          button.style.opacity = '1';
        } else if (value !== 'STO' && value !== 'RCL') {
          button.disabled = !enable;
          button.style.opacity = enable ? '1' : '0.5';
        }
      });
    }

    function preprocessInput(str) {
      let processed = str
        .replace(/\bpi\b/g, 'Math.PI')
        .replace(/\be\b/g, 'Math.E')
        .replace(/(\d+|Math\.PI|Math\.E|\))\s*([a-zA-Z(πe])/g, '$1*$2')
        .replace(/(\bpi\b|\be\b)\s*(\d+|\bpi\b|\be\b)/g, '$1*$2')
        .replace('^', '**');

      const functionMap = {
        sqrt: 'Math.sqrt',
        sin: 'Math.sin',
        cos: 'Math.cos',
        tan: 'Math.tan',
        asin: 'Math.asin',
        acos: 'Math.acos',
        atan: 'Math.atan',
        log: 'Math.log10',
        ln: 'Math.log',
        sinh: 'Math.sinh',
        cosh: 'Math.cosh',
        tanh: 'Math.tanh',
        asinh: 'Math.asinh',
        acosh: 'Math.acosh',
        atanh: 'Math.atanh',
        abs: 'Math.abs',
        floor: 'Math.floor',
        fact: 'factorial'
      };

      function parseNestedFunctions(input) {
        let result = '';
        let i = 0;
        while (i < input.length) {
          let match = input.slice(i).match(/^([a-z]+)\(/i);
          if (match) {
            let func = match[1];
            let start = i + match[0].length;
            let parenCount = 1;
            let argsStart = start;
            while (start < input.length && parenCount > 0) {
              if (input[start] === '(') parenCount++;
              if (input[start] === ')') parenCount--;
              start++;
            }
            if (parenCount === 0) {
              let args = input.slice(argsStart, start - 1);
              let processedArgs = parseNestedFunctions(args);
              let mappedFunc = functionMap[func] || func;
              if (['sin', 'cos', 'tan'].includes(func) && !isRadian) {
                result += `${mappedFunc}((${processedArgs}) * Math.PI / 180)`;
              } else {
                result += `${mappedFunc}(${processedArgs})`;
              }
              i = start;
            } else {
              result += input.slice(i);
              break;
            }
          } else {
            result += input[i];
            i++;
          }
        }
        return result;
      }

      processed = parseNestedFunctions(processed);
      processed = processed.replace(/nrt\(([^,]+),([^)]+)\)/g, 'Math.pow($2, 1/$1)')
                          .replace(/nrt\(([^,]+),([^)]*)/g, 'Math.pow($2, 1/$1)');
      return processed;
    }

    function handleButton(value) {
      if (isStoMode || isRclMode) {
        if (/^[0-9]$/.test(value)) {
          if (isStoMode) {
            try {
              const processedInput = preprocessInput(autoCloseParentheses(input));
              memory[parseInt(value)] = input ? roundResult(eval(processedInput)) : 0;
              localStorage.setItem('calculatorMemory', JSON.stringify(memory));
            } catch {
              memory[parseInt(value)] = 0;
              localStorage.setItem('calculatorMemory', JSON.stringify(memory));
            }
          } else if (isRclMode) {
            input = memory[parseInt(value)].toString();
            displayInput = input;
          }
          isStoMode = isRclMode = false;
          toggleNumberButtons(true);
          updateDisplay();
          inputElement.focus();
          return;
        }
        return;
      }

      if (value === 'Rad') {
        isRadian = !isRadian;
        radButton.textContent = isRadian ? 'Rad' : 'Deg';
        updateDisplay();
        inputElement.focus();
        return;
      }

      if (value === 'CE') {
        input = displayInput = '';
        result = '0';
        isSecond = false;
        lastResult = null;
      } else if (value === 'DEL') {
        input = input.slice(0, -1);
        displayInput = input;
      } else if (value === '2nd') {
        isSecond = !isSecond;
      } else if (value === 'STO') {
        isStoMode = true;
        toggleNumberButtons(false);
        inputElement.focus();
        return;
      } else if (value === 'RCL') {
        isRclMode = true;
        toggleNumberButtons(false);
        inputElement.focus();
        return;
      } else if (value === 'ENTER') {
        try {
          displayInput = autoCloseParentheses(input);
          result = roundResult(eval(preprocessInput(displayInput)));
          lastResult = result;
        } catch {
          result = 'Error';
        }
      } else if (value === '+/-') {
        input = input.startsWith('-') ? input.slice(1) : '-' + input;
        displayInput = input;
      } else if (value === '()') {
        input = input === '' || input === '0' ? '(' : countUnclosedParentheses(input) > 0 ? input + ')' : input + '()';
        displayInput = input;
      } else if (isSecond) {
        const secondFuncs = {sin: 'asin(', cos: 'acos(', tan: 'atan(', sinh: 'asinh(', cosh: 'acosh(', tanh: 'atanh('};
        input += secondFuncs[value] || value;
        displayInput = input;
        isSecond = false;
      } else {
        const funcs = ['sqrt', 'sin', 'cos', 'tan', 'log', 'ln', 'sinh', 'cosh', 'tanh', 'abs', 'floor', 'nrt'];
        if (funcs.includes(value)) {
          input = input === '0' || input === '' ? `${value}(` : lastResult && !isNaN(parseFloat(lastResult)) ? `${lastResult}*${value}(` : input + `${value}(`;
          lastResult = null;
        } else if (value === 'fact') {
          input = input === '0' || input === '' ? 'fact(' : lastResult && !isNaN(parseFloat(lastResult)) ? `${lastResult}*fact(` : input + 'fact(';
          lastResult = null;
        } else if (['pi', 'e'].includes(value)) {
          input = input === '0' || input === '' ? value : lastResult && !isNaN(parseFloat(lastResult)) ? `${lastResult}*${value}` : input + value;
          lastResult = null;
        } else if (/^[0-9]$/.test(value) && lastResult && !isNaN(parseFloat(lastResult))) {
          input = `${lastResult}*${value}`;
          lastResult = null;
        } else {
          input = input === '0' && /^[0-9]$/.test(value) ? value : input + value;
        }
        displayInput = input;
      }
      updateDisplay();
      inputElement.focus();
    }

    inputElement.addEventListener('input', () => handleInput(inputElement.value));
    inputElement.addEventListener('keydown', handleKeydown);
    buttons.forEach(button => button.addEventListener('click', () => handleButton(button.getAttribute('data-value'))));

    function updateTheme() {
      const savedTheme = document.documentElement.getAttribute('saved-theme') || localStorage.getItem('theme') || 'dark';
      const theme = savedTheme === 'light' ? 'light' : 'dark';
      const calculator = shadow.querySelector('.calculator');
      if (calculator) {
        calculator.setAttribute('data-theme', theme);
      }
    }

    document.addEventListener('themechange', () => {
      updateTheme();
    });

    updateTheme();

    calculatorInitialized = true;
  }

  function positionCalculator() {
    const rect = toggleButton.getBoundingClientRect();
    const parent = toggleButton.parentElement;
    const parentRect = parent.getBoundingClientRect();
    calcContainer.style.position = 'absolute';
    calcContainer.style.top = '250px';
    calcContainer.style.left = '30px';
    calcContainer.style.zIndex = '10000';
    calcContainer.style.background = 'transparent';
    calcContainer.style.border = 'none';
    calcContainer.style.borderRadius = '8px';
    calcContainer.style.width = '280px';
    calcContainer.style.overflow = 'hidden';
    calcContainer.style.boxSizing = 'border-box';
  }

  toggleButton.addEventListener('click', e => {
    e.stopPropagation();
    initializeCalculator();
    positionCalculator();
    calcContainer.style.display = calcContainer.style.display === 'none' ? 'block' : 'none';
    calcContainer.style.opacity = calcContainer.style.display === 'block' ? '1' : '0';
  });
});