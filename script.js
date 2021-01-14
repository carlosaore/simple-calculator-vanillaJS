function sum() {
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  if (Number(numberA) + Number(numberB) > 1000000) {
    document.getElementById("result").innerHTML = "<b>thick </b>boi";
  } else if (Number(numberA) + Number(numberB) < -1000000) {
    document.getElementById("result").innerHTML = "<i>smol </i> number";
  } else {
    document.getElementById("result").innerHTML = Number(numberA) + Number(numberB);
  }
}

function substraction() {
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  if (Number(numberA) - Number(numberB) > 1000000) {
    document.getElementById("result").innerHTML = "<b>thick</b>  boi";
  } else if (Number(numberA) - Number(numberB) < -1000000) {
    document.getElementById("result").innerHTML = "<i>smol </i>number";
  } else {
    document.getElementById("result").innerHTML = Number(numberA) - Number(numberB);
  }  
}

function product() {
  console.log(document.getElementById("numberA").value === "")
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;

  if (Number(numberA) * Number(numberB) < 0.0000001 && Number(numberA) / Number(numberB) > 0) {
    document.getElementById("result").innerHTML = "0<sup>+</sup>";
  } else if (Number(numberA) * Number(numberB) > -0.0000001 && Number(numberA) / Number(numberB) < 0) {
    document.getElementById("result").innerHTML = "0<sup>-</sup>";
  } else if (Number(numberA) * Number(numberB) > 1000000) {
    document.getElementById("result").innerHTML = "<b>thick</b>  boi";
  } else if (Number(numberA) * Number(numberB) < -1000000) {
    document.getElementById("result").innerHTML = "<i>smol </i>number";
  } else {
    document.getElementById("result").innerHTML = Number(numberA) * Number(numberB);
  } 
}

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

let calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function(){
  const numberC = document.getElementById("numberC").value;
  const numberD = document.getElementById("numberD").value;
  const operator = document.getElementById("operator").value;
  const result2 = document.getElementById("result2");
  switch(operator) {
    case "+":
      result2.innerHTML = Number(numberC) + Number(numberD);
      break;
    case "-":
      result2.innerHTML = Number(numberC) - Number(numberD);
      break;
    default:
      result2.innerHTML ="Invalid operator";
  }
  
});
