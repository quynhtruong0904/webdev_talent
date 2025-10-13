function solveEquation() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let resultField = document.getElementById("result");

  // Trường hợp a = 0
  if (a === 0) {
    if (b === 0) {
      resultField.value = (c === 0) ? "Vô số nghiệm" : "Vô nghiệm";
    } else {
      let x = -c / b;
      resultField.value = "Phương trình bậc nhất, x = " + x;
    }
    return;
  }

  // Tính delta
  let delta = b * b - 4 * a * c;

  if (delta < 0) {
    resultField.value = "Phương trình vô nghiệm";
  } else if (delta === 0) {
    let x = -b / (2 * a);
    resultField.value = "x₁ = x₂ = " + x;
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    resultField.value = "x₁ = " + x1 + " ; x₂ = " + x2;
  }
}

function clearForm() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("result").value = "";
}
