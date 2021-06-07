document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$("#logout").click(function () {
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn sẽ đăng xuất khỏi hệ thống?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đăng Xuất",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/logout",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function (result) {
          swal("Đã đăng xuất!", "Hẹn gặp lại bạn nhé", "success");
          console.log("thanh cong");
          window.location.replace("http://traibonglan.comm/index.html");
        },
        error: function () {
          swal("Đăng xuất bị lỗi", "Xin hãy thử lại", "success");
          console.log("da co loi");
        },
      });
    }
  );
});
