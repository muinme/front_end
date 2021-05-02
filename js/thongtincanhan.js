// Get the modal
const HOST = "http://localhost:8080";
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/football/userByUsername",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var obj = result;
      console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.image);
      readUser(obj.fullname, obj.image, obj.id);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
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
