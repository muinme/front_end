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
      console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.fullname);
      readProfile(
        obj.fullname,
        obj.email,
        obj.phone,
        obj.created,
        obj.image,
        obj.username
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readProfile(fullname, email, phone, created, image, username) {
  readAvatar(image);
  document.getElementById("frmEditProfile").innerHTML +=
    '<div class="row form-group">' +
    '    <div class="col-sm-3 col-xs-6">' +
    '        <label class="control-label" style="font-size: 18px;">Họ Và Tên</label>' +
    "    </div>" +
    '    <div class="col-sm-6 col-xs-6">' +
    '        <input data-val="true"' +
    '            data-val-number="The field Id must be a number."' +
    '            data-val-required="The Id field is required." id="Id"' +
    '            name="Id" type="hidden" value="7054">' +
    '        <input id="UserAvatarPath" name="UserAvatarPath" type="hidden"' +
    '            value="' +
    image +
    '">' +
    '        <input id="UserAvatarName" name="UserAvatarName" type="hidden"' +
    '            value="">' +
    '        <span class="field-validation-valid"' +
    '            data-valmsg-for="UserFirstName"' +
    '            data-valmsg-replace="true"></span>' +
    '        <input class="form-control" data-val="true"' +
    '            data-val-required="Họ không được để trống"' +
    '            id="UserFullname" name="fullname" type="text"' +
    '            value="' +
    fullname +
    '">' +
    "    </div>" +
    "</div>" +
    '<div class="row form-group">' +
    '    <div class="col-sm-3 col-xs-6">' +
    '        <label class="control-label "style="font-size: 18px;">Email</label>' +
    "    </div>" +
    '    <div class="col-sm-6 col-xs-6">' +
    '        <span class="field-validation-valid" data-valmsg-for="UserEmail"' +
    '            data-valmsg-replace="true"></span>' +
    '        <input class="form-control" id="UserEmail" name="UserEmail"' +
    '            type="text" value="' +
    email +
    '">' +
    "    </div>" +
    "</div>" +
    '<div class="row form-group">' +
    '    <div class="col-sm-3 col-xs-6">' +
    '        <label class="control-label"style="font-size: 18px;">Điện thoại</label>' +
    "    </div>" +
    '    <div class="col-sm-6 col-xs-6">' +
    '        <span class="field-validation-valid"' +
    '            data-valmsg-for="UserMobile"' +
    '            data-valmsg-replace="true"></span>' +
    '        <input class="form-control" id="UserMobile" name="UserMobile"' +
    '            type="text" value="' +
    phone +
    '">' +
    "    </div>" +
    "</div>" +
    '<div class="row form-group">' +
    '    <div class="col-sm-3 col-xs-6">' +
    '        <label class="control-label "style="font-size: 18px;">Ngày đăng ký</label>' +
    "    </div>" +
    '    <div class="col-sm-6 col-xs-6">' +
    '        <span class="field-validation-valid" data-valmsg-for="UserEmail"' +
    '            data-valmsg-replace="true"></span>' +
    '        <input class="form-control" id="UserEmail" name="UserEmail"' +
    '            type="text" value="' +
    created +
    '">' +
    "    </div>" +
    "</div>" +
    '<div class="row form-group">' +
    '    <a id="btnProfileSave"' +
    '        class="btn mb20 btn-small btn-primary" style="' +
    '        float: none;">Lưu thay đổi</a>' +
    '    <a id="btnProfileCancel"' +
    '        class="btn mb20 btn-small btn-default"style="' +
    '        float: none;">Quay lại</a>' +
    "</div>";
  $("#btnProfileSave").click(function () {
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
      xhrFields: {
        withCredentials: true,
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
}

function readAvatar(image) {
  document.getElementById("Avatar").innerHTML +=
    '<img id="profile-avatar" class="media-object" width="100%"' +
    'src="' +
    image +
    '" alt="avatar">';
}
