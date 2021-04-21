// Get the modal
const HOST = "http://localhost:8080";

$("#login_submit").click(function () {
  console.log("login button is pressed");
  var formData = {
    username: $("input[name='username']").val(),
    password: $("#ipnPassword").val(),
  };
  console.log(formData);
  $.ajax({
    type: "POST",
    url: HOST + "/football/login",
    dataType: "JSON",
    data: JSON.stringify(formData),
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      console.log("thanh cong");
      window.location.replace("http://localhost:5500/index_user.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
