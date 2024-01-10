document.addEventListener("DOMContentLoaded", () => {
  const selectBox = document.querySelector(".select__box");
  const selectOption = document.querySelector(".select__option");
  const selectValueEl = document.querySelector("#selectValue");
  const searchEl = document.querySelector("#search");
  const optionsList = document.querySelectorAll(".select__options li");
  const selectContent = document.querySelector(".select__content");

  function selectContentPosition() {
    var windowHeight = window.innerHeight;
    var boxBottom = selectBox.getBoundingClientRect().bottom;
    var contentHeight = selectContent.offsetHeight;

    if (windowHeight - boxBottom < contentHeight) {
      selectContent.classList.add("active");
    } else {
      selectContent.classList.remove("active");
    }

    // if (selectBox.classList.contains("active")) {
    //   if (windowHeight - boxBottom < contentHeight) {
    //     // selectContent.style.top = -contentHeight + "px";
    //     selectContent.classList.add("active");
    //   }
    // } else {
    //   selectContent.classList.remove("active");
    // }
  }

  selectContentPosition();

  selectOption.addEventListener("click", () => {
    selectBox.classList.toggle("active");
    selectContentPosition();
  });

  optionsList.forEach((option) => {
    option.addEventListener("click", () => {
      selectValueEl.value = option.textContent;
      selectBox.classList.remove("active");
      searchEl.value = "";
      setTimeout(
        () => optionsList.forEach((list) => list.removeAttribute("style")),
        500
      );
    });
  });

  searchEl.addEventListener("input", () => {
    const searchTerm = searchEl.value.toUpperCase();

    if (searchTerm !== "") {
      optionsList.forEach((list) => {
        const textValue = list.textContent.toUpperCase();
        if (textValue.includes(searchTerm)) {
          list.removeAttribute("style");
        } else {
          list.style.display = "none";
        }
      });
    } else {
      optionsList.forEach((list) => list.removeAttribute("style"));
    }
  });

  document.addEventListener("click", (event) => {
    if (!selectBox.contains(event.target)) {
      selectBox.classList.remove("active");
    }
  });
});
