$(document).ready(function () {
  LoadPage();
});

function LoadPage() {
  var football_id = GetURLParameter("football_id");
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/" + football_id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var obj = result;
      readTeam(
        obj.name,
        obj.logo,
        obj.image,
        obj.agemin,
        obj.agemax,
        obj.homeyard,
        obj.actiontime,
        obj.level,
        obj.introduce,
        obj.address
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

function readTeam(
  name,
  logo,
  image,
  agemin,
  agemax,
  homeyard,
  actiontime,
  level,
  introduce,
  address
) {
  document.getElementById("UpdateTeam").innerHTML =
    ' <div class="tab-pane fade active in" id="detail">' +
    '                                                <div class="col-md-12">' +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label"><strong>Chú' +
    "                                                                ý</strong></label>" +
    '                                                        <div class="col-md-9">' +
    "" +
    '                                                            <div class="alert alert-warning ng-scope">' +
    "                                                                <strong>Chú ý!</strong>" +
    "                                                                <br>" +
    "                                                                Bạn nên cập nhật số điện thoại vào tài khoản để đối tác" +
    "                                                                có thể liên hệ trực tiếp." +
    "                                                                <br>" +
    '                                                                Cập nhật số điện thoại <a href="myprofile.html"' +
    '                                                                    target="_blank">tại đây</a>' +
    "                                                            </div>" +
    "                                                            </table>" +
    "                                                        </div>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <div class="clear-bordered"></div>' +
    "                                                    </div>" +
    "" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label"><strong>Thông tin cơ' +
    "                                                                bản</strong></label>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 col-form-label">Tên đội bóng</label>' +
    '                                                        <div class="col-md-5">' +
    '                                                            <input type="text" id="name" value="' +
    name +
    '"' +
    '                                                                name="stadiumName" style="font-weight:bold"' +
    '                                                                placeholder="Nhập tên đội bóng" required=""' +
    '                                                                class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required">' +
    "                                                        </div>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label">Địa chỉ</label>' +
    '                                                        <div class="col-md-5">' +
    '                                                            <input id="address" value="' +
    address +
    '"' +
    '                                                                class="form-control ng-pristine ng-untouched ng-valid ng-empty">' +
    "                                                        </div>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label">Tuối nhỏ nhất</label>' +
    '                                                        <div class="col-md-2">' +
    '                                                            <input id="agemin" value="' +
    agemin +
    '"' +
    '                                                                class="form-control ng-pristine ng-untouched ng-valid ng-empty">' +
    "                                                        </div>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label">Tuối lớn nhất</label>' +
    '                                                        <div class="col-md-2">' +
    '                                                            <input id="agemax" value="' +
    agemax +
    '"' +
    '                                                                class="form-control ng-pristine ng-untouched ng-valid ng-empty">' +
    "                                                        </div>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label">Sân nhà</label>' +
    '                                                        <div class="col-md-5">' +
    '                                                            <input id="homeyard" value="' +
    homeyard +
    '"' +
    '                                                                class="form-control ng-pristine ng-untouched ng-valid ng-empty">' +
    "                                                        </div>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label">Thời gian hoạt' +
    "                                                            động</label>" +
    '                                                        <div class="col-md-2">' +
    '                                                            <input id="actiontime" type="time" name="time"' +
    '                                                                class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" />' +
    "                                                        </div>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label">Trình độ</label>' +
    '                                                        <div class="col-md-5">' +
    '                                                            <input id="level" value="' +
    level +
    '"' +
    '                                                                class="form-control ng-pristine ng-untouched ng-valid ng-empty"' +
    '                                                                type="text">' +
    "                                                        </div>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label">Giới thiệu</label>' +
    '                                                        <div class="col-md-7">' +
    '                                                            <textarea rows="3" cols="5" id="introduce"' +
    '                                                                class="form-control input-sm width-100p ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"' +
    '                                                                placeholder="Giới thiệu">' +
    introduce +
    "</textarea>" +
    "                                                        </div>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label"><strong>Hình ảnh' +
    "                                                                sân</strong></label>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label">Ảnh đội bóng</label>' +
    '                                                        <div class="col-md-5">' +
    '                                                            <div class="img-profile" title="Tải lên một hình ảnh đại diện" id="Avatar">' +
    '                                                                <img id="profile-avatar" class="media-object" width="100%" src="' +
    image +
    '" alt="avatar"></div>' +
    "                                                        </div>" +
    '                                                        <form id="uploadForm1" name="uploadForm1">' +
    '                                                            <div style="margin-left: 10px; ">' +
    '                                                                <div class="form-group" style="margin-top: 20px;">' +
    "                                                                    <label>Thay đổi ảnh đại diện</label>" +
    '                                                                    <input type="file"' +
    '                                                                        id="fileDatas" name="fileDatas"' +
    '                                                                        style="padding-left: 0px; margin-top: 20px;"' +
    '                                                                        accept=".xlsx, .xls, .csv">' +
    '                                                                    <span class="error" style="color:red;display: none;"' +
    '                                                                        id="fileDatas-require"></span>' +
    "                                                                </div>" +
    "                                                            </div>" +
    "                                                        </form>" +
    "                                                    </div>" +
    '                                                    <div class="form-group row">' +
    '                                                        <label class="col-md-3 control-label">Ảnh logo</label>' +
    '                                                        <div class="col-md-5">' +
    '                                                            <div class="img-profile" title="Tải lên một hình ảnh logo" id="Avatar">' +
    '                                                                <img id="profile-avatar" class="media-object" width="100%" src="' +
    logo +
    '" alt="avatar"></div>' +
    "                                                        </div>" +
    '                                                        <form id="uploadForm2" name="uploadForm2">' +
    '                                                            <div style="margin-left: 10px; ">' +
    '                                                                <div class="form-group" style="margin-top: 20px;">' +
    "                                                                    <label>Thay đổi ảnh logo</label>" +
    '                                                                    <input type="file"' +
    '                                                                        id="fileDatas" name="fileDatas"' +
    '                                                                        style="padding-left: 0px; margin-top: 20px;"' +
    '                                                                        accept=".xlsx, .xls, .csv">' +
    '                                                                    <span class="error" style="color:red;display: none;"' +
    '                                                                        id="fileDatas-require"></span>' +
    "                                                                </div>" +
    "                                                            </div>" +
    "                                                        </form>" +
    "                                                    </div>" +
    "                                                </div>" +
    "                                        </div>";
}

$("#btnSaveTeam").click(function () {
  var football_id = GetURLParameter("football_id");
  var formData = {
    name: $("#name").val(),
    address: $("#address").val(),
    agemin: $("#agemin").val(),
    agemax: $("#agemax").val(),
    homeyard: $("#homeyard").val(),
    actiontime: $("#actiontime").val(),
    level: $("#level").val(),
    introduce: $("#introduce").val(),
  };
  console.log(formData);
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn lưu thông tin đội bóng chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Lưu",
      closeOnConfirm: false,
    },
    function () {
      UploadFileImage(football_id);
      $.ajax({
        type: "POST",
        url: HOST + "/football/teamFootBall/updateProfile/" + football_id,
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
            "Cập nhật đội bóng thành công!",
            "Hệ thống đã lưu lại quá trình thay đổi của bạn!",
            "success"
          );
          LoadPage();
        },
        error: function () {
          swal("Cập nhật đội bóng thất bại!", "Xin hãy thử lại sau!", "error");
        },
      });
    }
  );
});

function UploadFileImage(id) {
  var form = $("#uploadForm1")[0];
  var data = new FormData(form);
  //console.log(data);
  $.ajax({
    type: "POST",
    enctype: "multipart/form-data",
    dataType: "JSON",
    url: HOST + "/admin/sync/options/importfileImageTeam/" + id,
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
      $("#uploadForm1")[0].reset();
    },
    error: function () {
      //$('#statusUpload').html(jqXHRm.responseJSON.statusName);
      console.log("error");
    },
  });
}

function UploadFileLogo(id) {
  var form = $("#uploadForm2")[0];
  var data = new FormData(form);
  //console.log(data);
  $.ajax({
    type: "POST",
    enctype: "multipart/form-data",
    dataType: "JSON",
    url: HOST + "/admin/sync/options/importfileLogoTeam/" + id,
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
      $("#uploadForm2")[0].reset();
      swal(
        "Cập nhật logo đội bóng thành công!",
        "Hệ thống đã lưu lại quá trình thay đổi của bạn!",
        "success"
      );
    },
    error: function () {
      swal("Cập nhật logo đội bóng thất bại!", "Xin hãy thử lại sau!", "error");
    },
  });
}

$("#btnSaveLogo").click(function () {
  var football_id = GetURLParameter("football_id");
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn lưu lại logo đội bóng chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      UploadFileLogo(football_id);
    }
  );
});
