document.querySelector(".cart").addEventListener("click", function () {
  alert("Redirecting to cart");
});

function scrollLeft() {
  document
    .getElementById("productSlider")
    .scrollBy({ left: -300, behavior: "smooth" });
}
function scrollRight() {
  document
    .getElementById("productSlider")
    .scrollBy({ left: 300, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  // Set equal heights dynamically
  function setEqualHeights() {
    let images = document.querySelectorAll(".image-container img");
    let maxHeight = 0;

    images.forEach((img) => {
      if (img.clientHeight > maxHeight) {
        maxHeight = img.clientHeight;
      }
    });

    images.forEach((img) => {
      img.style.height = maxHeight + "px";
    });
  }

  setEqualHeights();
  window.addEventListener("resize", setEqualHeights);
});

let login = document
  .querySelector("#login")
  .addEventListener("click", gotologinpage);

function gotologinpage() {
  window.location.href = "Login.html";
  console.log("hii");
}
