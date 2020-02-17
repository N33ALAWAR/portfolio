const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function() {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if(target==items[k].getAttribute)
    }
    console.log(this.getAttribute("data-target"));
  });
}
