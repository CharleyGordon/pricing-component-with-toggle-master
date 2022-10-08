const checkbox = document.querySelector(".cb");
const cards = document.querySelectorAll(".card");
const basic = document.querySelector('[class*="basic"]');
const professional = document.querySelector('[class*="professional"]');
const master = document.querySelector('[class*="master"]');
let basicPrice = ["199.99", "19.99"];
let professionalPrice = ["249.99", "24.99"];
let masterPrice = ["399.99", "39.99"];
let changeText = () => {
  switch (checkbox.checked) {
    case false:
      basic.innerText = basic.innerText[0] + basicPrice[0];
      professional.innerText = professional.innerText[0] + professionalPrice[0];
      master.innerText = master.innerText[0] + masterPrice[0];
      break;

    case true:
      basic.innerText = basic.innerText[0] + basicPrice[1];
      professional.innerText = professional.innerText[0] + professionalPrice[1];
      master.innerText = master.innerText[0] + masterPrice[1];
      break;
  }
};
window.addEventListener("load", changeText);
checkbox.addEventListener("click", changeText);
