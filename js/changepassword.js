// Get the modal
const HOST = "http://localhost:8080";

$("#btnChangePass").click(function () {
  var password = $("#NewUserPassword").val();
  var confirmPassword = $("#ConfirmNewUserPassword").val();
  if (password != confirmPassword) {
    alert("Mật khẩu mới và Xác nhận lại mật khẩu mới không trùng khớp");
    return false;
  }
  return true;
});

$("#btnChangePass").click(function () {
  console.log("ok chuaaaa");
  var username = "a";
  var formData = {
    password: $("#NewUserPassword").val(),
  };
  console.log(formData);
  $.ajax({
    type: "POST",
    url: HOST + "/football/user/updatePassWordByUsername/" + username,
    dataType: "JSON",
    data: JSON.stringify(formData),
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      console.log("thanh cong");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
