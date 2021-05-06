// Get the modal
const HOST = "http://traibonglan.com";

$("#register_submit").click(function () {
  console.log("ok chuaaaa");
  var confirmPassword = $("#inpReenter_password").val();
  console.log(confirmPassword);
  var formData = {
    fullname: $("#inpFullname").val(),
    username: $("#inpUsername").val(),
    password: $("#inpPassword").val(),
    email: $("#inpEmail").val(),
    phone: $("#inpPhone").val(),
  };
  console.log(formData.fullname);
  if (
    checkFill(
      formData.fullname,
      formData.username,
      formData.password,
      confirmPassword,
      formData.email,
      formData.phone
    ) == true
  ) {
    if (checkPassword(formData.password, confirmPassword) != false) {
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
          window.location.replace("http://traibonglan.com/login.html");
        },
        error: function () {
          console.log("da co loi");
        },
      });
    }
  }
});

function checkPassword(password, confirmPassword) {
  console.log("checkPassword");

  if (password != confirmPassword) {
    alert("Mật khẩu và xác nhận mật khẩu không trùng khớp");
    return false;
  }
  return true;
}

function checkFill(
  fullname,
  username,
  password,
  confirmPassword,
  email,
  phone
) {
  if (
    fullname == "" ||
    username == "" ||
    password == "" ||
    confirmPassword == "" ||
    email == "" ||
    phone == ""
  ) {
    console.log("trong");
    alert("Vui lòng điền đầy đủ thông tin");
    return false;
  }
  return true;
}
