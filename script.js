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
    optionsList.forEach((op) => op.removeAttribute("style"));
    optionSearch.value = "";
  });
});

optionSearch.addEventListener("keyup", () => {
  const filter = optionSearch.value.toUpperCase();
  const li = options.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    const liCount = li[i];
    const textValue = liCount.textContent;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      liCount.removeAttribute("style");
    } else {
      liCount.style.display = "none";
    }
  }
});
