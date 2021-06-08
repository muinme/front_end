$(document).ready(function () {
  readLoadPage();
});

function readLoadPage() {
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
}
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
    swal(
      {
        title: "Bạn chắc chắn rằng?",
        text: "Bạn muốn lưu thông tin cá nhân chứ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Lưu",
        closeOnConfirm: false,
      },
      function () {
        UploadFile();
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
            swal(
              "Cập nhật thông tin cá thành công!",
              "Hệ thống đã lưu lại quá trình thay đổi của bạn!",
              "success"
            );
            readLoadPage();
          },
          error: function () {
            swal(
              "Cập nhật thông tin cá thất bại!",
              "Xin hãy thử lại sau!",
              "error"
            );
          },
        });
      }
    );
  });

  $("#btnProfileCancel").click(function () {
    window.location.replace("http://traibonglan.com/index.html");
  });
}

function readAvatar(image) {
  document.getElementById("Avatar").innerHTML =
    '<img id="profile-avatar" class="media-object" width="100%"' +
    'src="' +
    image +
    '" alt="avatar">';
}

function UploadFile() {
  var form = $("#uploadForm")[0];
  var data = new FormData(form);
  //console.log(data);
  $.ajax({
    type: "POST",
    enctype: "multipart/form-data",
    dataType: "JSON",
    url: HOST + "/admin/sync/options/importfile",
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    crossDomain: true,
    xhrFields: {
      withCredentials: true,
    },
    timeout: 30000,
    success: function () {
      $("#uploadForm")[0].reset();
    },
    error: function () {
      //$('#statusUpload').html(jqXHRm.responseJSON.statusName);
      console.log("error");
    },
  });
}
