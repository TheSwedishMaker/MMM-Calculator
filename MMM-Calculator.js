Module.register("MMM-Calculator", {
  defaults: {},

  getDom: function() {
    const wrapper = document.createElement("div");
    
    // Toggle button and calculator layout
    wrapper.innerHTML = `
      <img id="toggle-img" src="modules/MMM-Calculator/calc.png" alt="Toggle Calculator">
      <div id="calculator" class="hidden">
        <input type="text" id="display" disabled />
        <div class="button-grid">
          <button class="calc-button" data-value="7">7</button>
          <button class="calc-button" data-value="8">8</button>
          <button class="calc-button" data-value="9">9</button>
          <button class="calc-button" data-value="/">/</button>
          <button class="calc-button" data-value="4">4</button>
          <button class="calc-button" data-value="5">5</button>
          <button class="calc-button" data-value="6">6</button>
          <button class="calc-button" data-value="*">*</button>
          <button class="calc-button" data-value="1">1</button>
          <button class="calc-button" data-value="2">2</button>
          <button class="calc-button" data-value="3">3</button>
          <button class="calc-button" data-value="-">-</button>
          <button class="calc-button" data-value="0">0</button>
          <button class="calc-button" data-value="C">C</button>
          <button class="calc-button" data-value="=">=</button>
          <button class="calc-button" data-value="+">+</button>
        </div>
      </div>
    `;
    
    // Initialize calculator and toggle logic
    this.initializeCalculator(wrapper);

    return wrapper;
  },
  
  start: function() {
  this.sendNotification('SHOW_MODULES', {});
},


  getStyles: function() {
    return ["MMM-Calculator.css"];
  },

  initializeCalculator: function(wrapper) {
    let display = wrapper.querySelector("#display");
// Toggle calculator logic
wrapper.querySelector("#toggle-img").addEventListener("click", () => {
  const calculatorDiv = wrapper.querySelector("#calculator");
  
  if (calculatorDiv.classList.contains("hidden")) {
    calculatorDiv.classList.remove("hidden");
    calculatorDiv.style.display = "block";  // Explicitly set display to block
    
    // Set position to center of the screen
    calculatorDiv.style.position = "fixed";
    
    display.value = "";
    
    let viewportHeight = window.innerHeight;
    let calculatorHeight = calculatorDiv.offsetHeight;
    let topPosition = (viewportHeight - calculatorHeight) / 2;
    calculatorDiv.style.top = topPosition + "px";
    
    calculatorDiv.style.left = "50%";
    calculatorDiv.style.transform = "translateX(-50%)";
    
    this.sendNotification('HIDE_MODULES', {exceptionList: ["MMM-Calculator"]});
  } else {
    calculatorDiv.classList.add("hidden");
    calculatorDiv.style.display = "none";  // Explicitly set display to none
    
    // Reset position
    calculatorDiv.style.position = "";
    calculatorDiv.style.top = "";
    calculatorDiv.style.left = "";
    calculatorDiv.style.transform = "";
    
    this.sendNotification('SHOW_MODULES', {});
  }
  
  console.log("Toggle button clicked. Hidden class applied:", calculatorDiv.classList.contains("hidden"));
});




    // Calculator logic
    wrapper.querySelectorAll(".calc-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const value = event.target.getAttribute("data-value");
        if (value === "C") {
          display.value = "";
        } else if (value === "=") {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = "Error";
          }
        } else {
          display.value += value;
        }
      });
    });
  }
});
