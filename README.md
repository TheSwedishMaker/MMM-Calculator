# MMM-Calculator
A simple calculator for the MagicMirror on a touch display. The module shows
a button to be clicked and takes you to a new view with a calculator. 

Simply clone the repo
```bash
git clone https://github.com/TheSwedishMaker/MMM-Calculator 
```
Add the following to your config.js 

```bash
{
  module: "MMM-Calculator",
  position: "bottom_right", // This can be any of the regions
  config: {
    // See 'Configuration options' for more information.
  }
},
```
Add an image to your MMM-Calculator folder and name it calc.png or 
rename the image in MMM-Calculator.js 

This module uses another module to hide all other modules when run. Get it 
here: https://github.com/TheSwedishMaker/MMM-ModuleController 

