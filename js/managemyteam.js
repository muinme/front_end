document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/Username",
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
        readTeam(obj.name, obj.logo, obj.image, obj.id);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
function readTeam(fullname, logo, image, id) {
  document.getElementById("listTeam").innerHTML +=
    '<tr id="team' +
    id +
    '" ng-repeat="stadium in stadiums" class="ng-scope"' +
    '                                                            style="text-align: left;">' +
    '                                                            <td class="ng-binding"></td>' +
    "                                                            <td>" +
    '                                                                <a><strong class="ng-binding">' +
    fullname +
    "" +
    "                                                                      </strong></a>" +
    "                                                            </td>" +
    "                                                            <td>" +
    '                                                                <img height="120" src="' +
    logo +
    '">' +
    "                                                            </td>" +
    "                                                            <td>" +
    '                                                                <img height="120" src="images/san1.jpg">' +
    "                                                            </td>" +
    "" +
    '                                                            <td align="right" style="text-align:right">' +
    '                                                                <div class="form-group">' +
    '                                                                    <a href="changeinformationteam.html?football_id=' +
    id +
    '"' +
    '                                                                        class="btn btn-primary btn-primary-extra dropdown-toggle"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="glyphicon glyphicon-pencil"></i> Sửa' +
    "                                                                        thông tin</a>" +
    "                                                                    <br>" +
    " <a" +
    '                                             onclick="myFunction(' +
    id +
    ')" class="btn btn-danger btn-sm"' +
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
      text: "Bạn muốn xóa đội bóng này chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/teamFootBall/delete/" + id,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function () {
          deleteRow("listTeam", "team" + id + "");
          swal(
            "Xóa đội bóng thành công!",
            "Hệ thống đã lưu lại quá trình thay đổi của bạn!",
            "success"
          );
        },
        error: function () {
          console.log("da co loi");
          swal("Xóa đội bóng thất bại!", "Xin hãy thử lại sau!", "error");
        },
      });
    }
  );
}

function deleteRow(tbodyid, rowid) {
  document.getElementById(tbodyid).removeChild(document.getElementById(rowid));
}
