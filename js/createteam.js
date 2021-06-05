$("#btnCreateTeam").click(function () {
  var formData = {
    name: $("#name").val(),
    address: $("#address").children("option:selected").text(),
    agemin: $("#agemin").val(),
    agemax: $("#agemax").val(),
    homeyard: $("#homeyard").val(),
    actiontime: $("#actiontime").val(),
    level: $("#level").val(),
    introduce: $("#introduce").val(),
  };
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn tạo đội bóng với các thông tin trên chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Lưu",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/teamFootBall/create/",
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
            "Tạo đội bóng thành công!",
            "Hệ thống đã lưu lại quá trình thay đổi của bạn!",
            "success"
          );
        },
        error: function () {
          swal("Tạo đội bóng thất bại!", "Xin hãy thử lại sau!", "error");
        },
      });
    }
  );
});
