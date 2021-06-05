$("#btnCreatePitch").click(function () {
  var formData = {
    name: $("#name").val(),
    introduce: $("#introduce").val(),
    type: $("#type").children("option:selected").val(),
    address: $("#address").val(),
    googlemap: $("#googlemap").val(),
    phone: $("#phone").val(),
    email: $("#email").val(),
    facebook: $("#facebook").val(),
  };
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn tạo sân bóng với các thông tin trên chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Lưu",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/pitch/create/",
        dataType: "JSON",
        data: JSON.stringify(formData),
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function (result) {
          swal(
            "Tạo sân bóng thành công!",
            "Hệ thống đã lưu lại quá trình thay đổi của bạn!",
            "success"
          );
        },
        error: function () {
          swal("Tạo sân bóng thất bại!", "Xin hãy thử lại sau!", "error");
        },
      });
    }
  );
});
