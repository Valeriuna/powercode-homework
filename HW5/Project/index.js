const modalOpen = document.getElementById("modal_open");
const modalClose = document.getElementById("modal_close");
const modal = document.getElementById("modal");
const input = document.getElementById("input_1");
const input2 = document.getElementById("input_2");
const input3 = document.getElementById("input_3");
const input4 = document.getElementById("input_4");
const text = document.getElementById("text");


function openModal() {  
  modal.classList.add("opened")
}
function closeModal() {
  modal.classList.remove("opened")
}
modalOpen.onclick = openModal;
modalClose.onclick = closeModal;

document.addEventListener('click', function(event) {
    if (
      event.target !== modal &&
      event.target !== modalOpen &&
      event.target !== input &&
      event.target !== input2 &&
      event.target !== input3 &&
      event.target !== input4 &&
      event.target !== text
    ) {
      closeModal();
    }
});




