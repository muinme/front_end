document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$("#login_submit").click(function () {
  var formData = {
    username: $("#inpUsername").val(),
    password: $("#inpPassword").val(),
  };
  console.log(formData);
  $.ajax({
    type: "POST",
    url: HOST + "/football/login",
    data: JSON.stringify(formData),
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      swal("Đăng nhập thành công!", "Welcome!", "success");
      window.location.replace("http://traibonglan.com/index.html");
    },
    error: function () {
      swal("Mật khẩu không đúng", "Xin lỗi!", "error");
    },
  });
});

function myfunction() {
  var username = $("#inpUsername").val();
  if (!username) {
    swal("Vui lòng điền username để lấy lại mật khẩu", "Xin lỗi!", "error");
  } else {
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
          swal("Tên đăng nhập không tồn tại");
        } else {
          resetAccount(username);
        }
      },
      error: function () {
        swal("Tài Khoản Đã Bị Vô Hiệu Hóa", "Xin lỗi!", "error");
      },
    });
  }
}

function resetAccount(username) {
  console.log(username);
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn retset tài khoản này chứ này chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "GET",
        url: HOST + "/football/user/resetAccount/" + username,

        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function (result) {
          swal("Mật khẩu reset gửi về email của bạn", "Done!", "success");
        },
        error: function () {},
      });
    }
  );
}
