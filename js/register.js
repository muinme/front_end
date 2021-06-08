document.write('<script type="text/javascript" src="/js/host.js" ></script>');
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
    if (checkUsername() != false) {
      if (checkPassword(formData.password, confirmPassword) != false) {
        swal(
          {
            title: "Bạn chắc chắn rằng?",
            text: "Bạn muốn tạo tài khoản với thông tin này chứ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Đồng ý",
            closeOnConfirm: false,
          },
          function () {
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
                swal("Tạo tài khoản thành công", "Done!", "success");
                window.location.replace("http://localhost:5501/login.html");
              },
              error: function () {
                swal("Tạo tài khoản thành bại", "Sorry!", "error");
              },
            });
          }
        );
      }
    }
  }
});

function checkPassword(password, confirmPassword) {
  if (password != confirmPassword) {
    swal("Mật khẩu và xác nhận mật khẩu không trùng khớp");
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
    swal("Vui lòng điền đầy đủ thông tin");
    return false;
  }
  return true;
}

function checkUsername() {
  var username = $("#inpUsername").val();
  $.ajax({
    type: "GET",
    url: HOST + "/football/user/" + username,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      if (!result) {
        return true;
      } else {
        swal("Tên đăng nhập đã tồn tại");
        return false;
      }
    },
    error: function () {
      return false;
    },
  });
}
