const btn = document.querySelector("#searchBtn");
const sb = document.querySelector("#selectedSpot");
let selectedValue = "";
btn.onclick = (event) => {
  event.preventDefault();
  // show the selected index
  selectedValue = sb.value;
  // alert(sb.value);
  let divsToHide = document.getElementsByClassName("card");
  console.log(sb.value);
  console.log(divsToHide[0].getAttribute("class").includes(selectedValue));
  if (divsToHide.length > 0) {
    for (let i = 0; i < divsToHide.length; i++) {
      if (!divsToHide[i].getAttribute("class").includes(selectedValue)) {
        divsToHide[i].style.display = "none"; // depending on what you're doing
      } else {
        divsToHide[i].style.display = "inline-block";
      }

      if (selectedValue === "All") {
        divsToHide[i].style.display = "inline-block";
      }
    }
  }
};
