function getValues() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  return { a, b, c };
}

function findMax() {
  let { a, b, c } = getValues();
  let maxValue = Math.max(a, b, c);
  document.getElementById("result").value = maxValue;
}

function findMin() {
  let { a, b, c } = getValues();
  let minValue = Math.min(a, b, c);
  document.getElementById("result").value = minValue;
}

function sinA() {
  let { a } = getValues();
  let rad = a * Math.PI / 180;  // đổi từ độ sang radian
  let result = Math.sin(rad);
  document.getElementById("result").value = result;
}

function cosA() {
  let { a } = getValues();
  let rad = a * Math.PI / 180;
  let result = Math.cos(rad);
  document.getElementById("result").value = result;
}

function multiplyAB() {
  let { a, b } = getValues();
  let result = a * b;
  document.getElementById("result").value = result;
}
