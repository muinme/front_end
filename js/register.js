// Get the modal
const HOST = "http://localhost:8080";

$("#register_submit").click(function () {
  console.log("ok chuaaaa");
  var formData = {
    fullname: $("#inpFullname").val(),
    username: $("#inpUsername").val(),
    password: $("#inpPassword").val(),
    email: $("#inpEmail").val(),
    phone: $("#inpPhone").val(),
  };
  console.log(formData);
  $.ajax({
    type: "POST",
    url: HOST + "/football/register",
    dataType: "JSON",
    data: JSON.stringify(formData),
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      console.log("thanh cong");
      // window.location.replace("http://localhost:5500/index.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

$("#register_submit").click(function () {
  var password = $("#inpPassword").val();
  var confirmPassword = $("#inpReenter_password").val();
  if (password != confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
});
