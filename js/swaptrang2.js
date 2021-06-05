function swap() {
  document.getElementById("container1").style.display = "none";
  document.getElementById("container11").style.display = "none";
  document.getElementById("container2").style.display = "block";
  document.getElementById("container22").style.display = "block";

  $("#btnChangePass").click(function () {
    // var password = $("#UserPassword").val();
    var newPassword = $("#NewUserPassword").val();
    var confirmPassword = $("#ConfirmNewUserPassword").val();
    console.log(newPassword + " " + confirmPassword);
    if (checkConfirmPassword(newPassword, confirmPassword) == true) {
      updateProfile(newPassword);
    }
  });
}
function swap2() {
  document.getElementById("container2").style.display = "none";
  document.getElementById("container22").style.display = "none";
  document.getElementById("container1").style.display = "block";
  document.getElementById("container11").style.display = "block";
}

function updateProfile(newPassword) {
  var formData = {
    password: newPassword,
  };
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn thay đổi mật khẩu hiện tại chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Lưu",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/user/updatePassWordByUsername",
        dataType: "JSON",
        data: JSON.stringify(formData),
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function () {
          swal(
            "Thay đổi mật khẩu thành công!",
            "Hệ thống đã lưu lại quá trình thay đổi của bạn!",
            "success"
          );
        },
        error: function () {
          swal("Thay đổi mật khẩu thất bại!", "Xin hãy thử lại sau!", "error");
        },
      });
    }
  );
}
function checkConfirmPassword(password, confirmPassword) {
  if (password != confirmPassword) {
    swal("Dữ liệu xác nhận lại không trùng khớp");
    return false;
  }
  return true;
}
