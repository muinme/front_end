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
      readUser(obj.fullname, obj.image, obj.id);
    },
    error: function () {
      console.log("da co loi");
    },
  });
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
    '<tr ng-repeat="stadium in stadiums" class="ng-scope"' +
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
    '                                                                <img height="120" src="images/san1.jpg">' +
    "                                                            </td>" +
    "" +
    '                                                            <td align="right" style="text-align:right">' +
    '                                                                <div class="form-group">' +
    '                                                                    <a href="createpitch.html?football_id=' +
    id +
    '"' +
    '                                                                        class="btn btn-primary btn-primary-extra dropdown-toggle"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="glyphicon glyphicon-pencil"></i> Sửa' +
    "                                                                        thông tin</a>" +
    "                                                                    <br>" +
    '                                                                    <a href="updatepitch.html?football_id=' +
    id +
    '"' +
    '                                                                        class="btn btn-danger btn-sm"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="fa fa-calendar"></i>Cập Nhật</a> <a' +
    '                                                                        class="btn btn-danger btn-sm"' +
    '                                                                        title="Xóa"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="glyphicon glyphicon-remove-circle"></i>' +
    "                                                                        Xóa</a>" +
    "                                                                </div>" +
    "                                                            </td>" +
    "                                                        </tr>";
}
function readUser(fullname, image) {
  console.log("jdjsjidooooooooooooooo");
  document.getElementById("liUser").innerHTML +=
    '<button class="dropbtn"><img src="' +
    image +
    '" class="avatar img-fluid rounded-circle">' +
    fullname +
    "</button>" +
    '                                <div class="dropdown-content">' +
    '                                    <a href="thongtincanhan.html"><i class="fa fa-user"></i>Profile</a>' +
    '                                    <a href="myteam.html"><i class="fa fa-futbol-o"></i>My Team FootBall</a>' +
    '                                    <a href="managementpitch.html"><i class="fa fa-th-large"></i>My Pitch</a>' +
    '                                    <a href="historyorderpitch.html"><i class="fa fa-history"></i>History Pitch</a>' +
    '                                    <a href="#"><i class="fa fa-history"></i>History Match</a>' +
    '                                    <button id = "logout" style="text-align:left ;border-radius: 0px; width: 190px;"><i class="fa fa-sign-out"></i>Logout →</button>' +
    "                                </div>";
  $("#logout").click(function () {
    console.log("logout button is pressed");
    $.ajax({
      type: "POST",
      url: HOST + "/football/logout",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      xhrFields: {
        withCredentials: true,
      },
      success: function (result) {
        console.log("thanh cong");
        window.location.replace("http://localhost:5500/index.html");
      },
      error: function () {
        console.log("da co loi");
      },
    });
  });
}
