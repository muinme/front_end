// Get the modal
const HOST = "http://localhost:8080";

$("#btnProfileSave").click(function () {
  console.log("ok chuaaaa");
  var username = "a";
  var formData = {
    fullname: $("#UserFullname").val(),
    email: $("#UserEmail").val(),
    phone: $("#UserMobile").val(),
  };
  console.log(formData);
  $.ajax({
    type: "POST",
    url: HOST + "/football/user/updateProfileByUsername/" + username,
    dataType: "JSON",
    data: JSON.stringify(formData),
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      console.log("thanh cong");
      alert("Thay đổi thành công!");
    },
    error: function () {
      console.log("da co loi");
      alert("Thay đổi thất bại!");
    },
  });
});
