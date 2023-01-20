"use strict";

const modalOpen = document.getElementById("modal_open");
modalOpen.onclick = openModal;
const backDrop = document.getElementById("back-drop");

function openModal() {
  backDrop.classList.add("opened");
}
function closeModal() {
  backDrop.classList.remove("opened");
}

const modalClose = document.getElementById("modal_close");
modalClose.onclick = closeModal;

const generalClose = document.addEventListener("click", function (event) {
  if (event.target === backDrop) {
    closeModal();
  }
});

const productsArr = [
  {
    name: "Generator",
    quantity: 150,
  },
  {
    name: "Invertor",
    quantity: 200,
  },
  {
    name: "Battery",
    quantity: 300,
  },
  {
    name: "Cable",
    quantity: 500,
  },
];

const products = document.getElementById("products");

function getHtmlFromProduct(product) {
  return `<li><span>${product.name}</span> ${product.quantity}</li>`;
}

let html = "";

for (let i = 0; i < productsArr.length; i++) {
  html += getHtmlFromProduct(productsArr[i]);
}

products.innerHTML = html;
