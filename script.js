document.querySelector("#calcular").addEventListener("click", () => {
  const n1 = parseInt(document.querySelector("#n11").value);
  const n2 = parseInt(document.querySelector("#n22").value);
  const op = document.querySelector("#op").value;
  let r;
  if (op == "+") {
    r = n1 + n2;
  } else if (op == "-") {
    r = n1 + n2;
  } else if (op == "/") {
    r = n1 + n2;
  } else if (op == "*") {
    r = n1 + n2;
  }

  console.log(r);
  console.log(n1);
  console.log(n2);
  console.log(op);
  document.querySelector("#resultado").innerHTML = r;
});
