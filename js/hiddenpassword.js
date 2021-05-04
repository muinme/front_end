// step 1
let showPassword = false;

// step 2
const ipnElement = document.querySelector("#inpPassword");
const btnElement = document.querySelector("#btnPassword");

// step 3
btnElement.addEventListener("click", function () {
  if (showPassword) {
    // Đang hiện password
    // Chuyển sang ẩn password
    ipnElement.setAttribute("type", "password");
    showPassword = false;
  } else {
    // Đang ẩn password
    // Chuyển sang hiện password
    ipnElement.setAttribute("type", "text");
    showPassword = true;
  }
});
