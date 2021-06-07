document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$("#login_submit").click(function () {
  console.log("login button is pressed");

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
      console.log("thanh cong");
      swal("Đăng nhập thành công!", "Welcome!", "success");
      window.location.replace("http://traibonglan.com/index.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
