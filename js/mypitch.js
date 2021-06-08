document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/football/pitch/Username",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      for (var key in result) {
        var obj = result[key];
        console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.id);
        readPitch(obj.name, obj.address, obj.image, obj.id);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
function readPitch(fullname, address, image, id) {
  document.getElementById("listPitch").innerHTML +=
    '<tr id="pitch' +
    id +
    '" ng-repeat="stadium in stadiums" class="ng-scope"' +
    '                                                            style="text-align: left;">' +
    '                                                            <td class="ng-binding"></td>' +
    "                                                            <td>" +
    '                                                                <a><strong class="ng-binding">' +
    fullname +
    "" +
    "                                                                      </strong></a>" +
    '                                                                <div class="ng-binding">' +
    '                                                                    <i class="fa fa-map-o"></i> ' +
    address +
    "" +
    "                                                                </div>" +
    "                                                            </td>" +
    "                                                            <td>" +
    '                                                                <img height="120" src="' +
    image +
    '">' +
    "                                                            </td>" +
    "" +
    '                                                            <td align="right" style="text-align:right">' +
    '                                                                <div class="form-group">' +
    '                                                                    <a href="changeinformationpitch.html?pitch_id=' +
    id +
    '"' +
    '                                                                        class="btn btn-primary btn-primary-extra dropdown-toggle"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="glyphicon glyphicon-pencil"></i> Sửa' +
    "                                                                        thông tin</a>" +
    "                                                                    <br>" +
    '                                                                    <a href="updatepitch.html?pitch_id=' +
    id +
    '"' +
    '                                                                        class="btn btn-danger btn-sm"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="fa fa-calendar"></i>Cập Nhật</a> <a' +
    '                                                                        class="btn btn-danger btn-sm" onclick="myFunction(' +
    id +
    ')"' +
    '                                                                        title="Xóa"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="glyphicon glyphicon-remove-circle"></i>' +
    "                                                                        Xóa</a>" +
    "                                                                </div>" +
    "                                                            </td>" +
    "                                                        </tr>";
}

function myFunction(id) {
  console.log("id" + id);
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn xóa sân bóng này chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/pitch/delete/" + id,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function () {
          deleteRow("listPitch", "pitch" + id + "");
          swal(
            "Xóa sân bóng thành công!",
            "Hệ thống đã lưu lại quá trình thay đổi của bạn!",
            "success"
          );
        },
        error: function () {
          console.log("da co loi");
          swal("Xóa sân bóng thất bại!", "Xin hãy thử lại sau!", "error");
        },
      });
    }
  );
}

function deleteRow(tbodyid, rowid) {
  console.log("dmmmm");
  document.getElementById(tbodyid).removeChild(document.getElementById(rowid));
}
