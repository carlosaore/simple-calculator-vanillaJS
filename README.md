# simple-calculator-vanillaJS
> A very simple calculator app to showcase some vanilla HTML/JS/CSS skills.\
Input two numbers then choose an operator to see the result.

[View demo](https://nifty-torvalds-47b1b1.netlify.app/)

## What is this?

This was meant to be a simple learning exercise to practice injecting content into the HTML DOM without any fancy library or framework like React.

The logic is handled by 5 very simple JavaScript functions: one for each operation (+, -, x, and /), and one for displaying the results.

## Example:

```javascript
function divide() {
  console.log(document.getElementById("numberA").value === "")
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  if (numberB == "" || numberA == 0) {
    document.getElementById("result").innerHTML = "black hole";
  } else if (Number(numberA) / Number(numberB) < 0.0000001 && Number(numberA) / Number(numberB) > 0) {
    document.getElementById("result").innerHTML = "0<sup>+</sup>";
  } else if (Number(numberA) / Number(numberB) > -0.0000001 && Number(numberA) / Number(numberB) < 0) {
    document.getElementById("result").innerHTML = "0<sup>-</sup>";
  } else if (Number(numberA) / Number(numberB) > 1000000) {
    document.getElementById("result").innerHTML = "<b>thick</b>  boi";
  } else if (Number(numberA) / Number(numberB) < -1000000) {
    document.getElementById("result").innerHTML = "<i>smol </i>number";
  } else {
    document.getElementById("result").innerHTML = Number(numberA) / Number(numberB);
  }  
}
```

As you can see, edge cases like division by 0 are handled. The code is very verbose because everything is coded with vanilla HTML and JS.
