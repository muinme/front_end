$(document).ready(function () {
  var pitch_id = GetURLParameter("pitch_id");
  $.ajax({
    type: "GET",
    url: HOST + "/football/pitch/" + pitch_id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var obj = result;
      readPitch(
        obj.name,
        obj.introduce,
        obj.googlemap,
        obj.address,
        obj.image,
        obj.phone,
        obj.email,
        obj.facebook
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

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

function readPitch(
  name,
  introduce,
  googlemap,
  address,
  image,
  phone,
  email,
  facebook
) {
  document.getElementById("UpdatePitch").innerHTML +=
    '<div class="tab-pane fade active in" id="detail">' +
    '    <div class="col-md-12">' +
    '        <div class="form-group row">' +
    '            <div class="clear-bordered"></div>' +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 control-label"><strong>Thông tin cơ' +
    "                    bản</strong></label>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 col-form-label">Tên sân</label>' +
    '            <div class="col-md-5">' +
    '                <input type="text" ng-model="form.Name" id="name" name="stadiumName"' +
    '                    style="font-weight:bold" value="' +
    name +
    '" required=""' +
    '                    class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required">' +
    "            </div>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 col-form-label">Giới thiệu ngắn</label>' +
    '            <div class="col-md-7">' +
    '                <textarea id="introduce"' +
    '                    class="form-control ng-pristine ng-untouched ng-valid ng-empty"' +
    '                    rows="5">' +
    introduce +
    "</textarea>" +
    "            </div>" +
    "        </div>" +
    '        <div class="form-group row ng-scope">' +
    '            <label class="col-md-3 col-form-label">Mặt sân</label>' +
    '            <div class="col-md-3">' +
    '                <select id="type"' +
    '                    class="form-control ng-pristine ng-untouched ng-valid ng-not-empty">' +
    '                    <option label="Sân cỏ nhân tạo" value="1" selected="selected">' +
    "                        Sân cỏ" +
    "                        nhân tạo</option>" +
    '                    <option label="Sân cỏ tự nhiên" value="2">Sân cỏ tự' +
    "                        nhiên</option>" +
    '                    <option label="Sân cát" value="3">Sân cát</option>' +
    "                </select>" +
    "            </div>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 control-label"><strong>Vị trí' +
    "                    sân</strong></label>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 control-label">Địa chỉ</label>' +
    '            <div class="col-md-5">' +
    '                <input id="address" required="" value="' +
    address +
    '" ' +
    '                    class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required">' +
    "            </div>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 control-label">Định vị</label>' +
    '            <div class="col-md-5">' +
    '                <input id="googlemap"' +
    '                    value="' +
    googlemap +
    '" class="form-control ng-pristine ng-untouched ng-valid ng-empty">' +
    "            </div>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <div class="clear-bordered"></div>' +
    "        </div>" +
    "" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 control-label"><strong>Thông tin liên' +
    "                    hệ</strong></label>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 control-label">Điện thoại</label>' +
    '            <div class="col-md-5">' +
    '                <input id="phone" required="" value="' +
    phone +
    '"' +
    '                    placeholder="Điện thoại liên hệ đặt sân"' +
    '                    class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required">' +
    "            </div>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 control-label">Địa chỉ email</label>' +
    '            <div class="col-md-5">' +
    '                <input id="email"' +
    '                    value="' +
    email +
    '" class="form-control ng-pristine ng-untouched ng-valid ng-empty"' +
    '                    placeholder="Địa chỉ email">' +
    "" +
    "            </div>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 control-label">Facebook</label>' +
    '            <div class="col-md-5">' +
    '                <input id="facebook" placeholder="Địa chỉ facebook"' +
    '                    value="' +
    facebook +
    '" class="form-control ng-pristine ng-untouched ng-valid ng-empty">' +
    "            </div>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <div class="clear-bordered"></div>' +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 control-label"><strong>Hình ảnh' +
    "                    sân</strong></label>" +
    "        </div>" +
    '        <div class="form-group row">' +
    '            <label class="col-md-3 col-form-label">Slideshow</label>' +
    '                                                        <div class="col-md-5">' +
    '                                                            <div class="img-profile" title="Tải lên một hình ảnh đại diện" id="Avatar">' +
    '                                                                <img id="profile-avatar" class="media-object" width="100%" src="' +
    image +
    '" alt="avatar"></div>' +
    "                                                        </div>" +
    '            <div class="col-md-3">' +
    '                <form id="uploadForm" name="uploadForm">' +
    '                    <div style="margin-left: 10px; ">' +
    '                        <div class="form-group" style="margin-top: 20px;">' +
    "                            <label>Thay đổi ảnh sân bóng</label>" +
    '                            <input type="file" id="fileDatas" name="fileDatas"' +
    '                                style="padding-left: 0px; margin-top: 20px;"' +
    '                                accept=".xlsx, .xls, .csv">' +
    '                            <span class="error" style="color:red;display: none;"' +
    '                                id="fileDatas-require"></span>' +
    "                        </div>" +
    "                    </div>" +
    "                </form>" +
    "            </div>" +
    "        </div>" +
    "    </div>" +
    "</div>";
}
$("#btnSavePitch").click(function () {
  var pitch_id = GetURLParameter("pitch_id");
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
  console.log(formData);
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
        url: HOST + "/football/pitch/updateProfile/" + pitch_id,
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
            "Cập nhật thông tin sân bóng thành công!",
            "Hệ thống đã lưu lại quá trình thay đổi của bạn!",
            "success"
          );
        },
        error: function () {
          swal(
            "Cập nhật thông tin sân bóng thất bại!",
            "Xin hãy thử lại sau!",
            "error"
          );
        },
      });
    }
  );
});
