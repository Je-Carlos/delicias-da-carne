const dropdownLinks = document.querySelectorAll(".selecionaLi a");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
