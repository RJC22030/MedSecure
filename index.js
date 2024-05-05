let container = document.getElementById("new_container");

toggle = () => {
  new_container.classList.toggle("sign-in");
  new_container.classList.toggle("sign-up");
};

setTimeout(() => {
  new_container.classList.add("sign-in");
}, 200);
document.getElementById("dataUser").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  // Toggle sign-in and sign-up classes
});
