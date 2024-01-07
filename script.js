const selectBox = document.querySelector(".select__box");
const selectOption = document.querySelector(".select__option");
const soValue = document.querySelector("#soValue");
const optionSearch = document.querySelector("#optionSearch");
const options = document.querySelector(".select__options");
const optionsList = document.querySelectorAll(".select__options li");

selectOption.addEventListener("click", () => {
  selectBox.classList.toggle("active");
});

optionsList.forEach((option) => {
  option.addEventListener("click", () => {
    soValue.value = option.textContent;
    selectBox.classList.remove("active");
    optionSearch.value = "";
    optionsList.forEach((op) => op.removeAttribute("style"));
  });
});

optionSearch.addEventListener("input", () => {
  const searchTerm = optionSearch.value.toLowerCase();

  if (searchTerm !== "") {
    optionsList.forEach((op) => {
      const optionText = op.textContent.toLowerCase();
      if (optionText.includes(searchTerm)) {
        op.removeAttribute("style");
      } else {
        op.style.display = "none";
      }
    });
  } else {
    optionsList.forEach((op) => op.removeAttribute("style"));
  }
});
