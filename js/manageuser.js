document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$(document).ready(function () {
  console.log("vll");
  $.ajax({
    type: "GET",
    url: HOST + "/football/user/getAllUserMember",
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
        readTcMatch(obj.id, obj.fullname);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readTcMatch(user_id, fullname) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyMatch/getTcMatch/" + user_id,
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
      console.log(obj);
      readTbMatch(user_id, fullname, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readTbMatch(user_id, fullname, tcMatch) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyMatch/getTbMatch/" + user_id,
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
      console.log(obj);
      readWaitMatch(user_id, fullname, tcMatch, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readWaitMatch(user_id, fullname, tcMatch, tbMatch) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/requestMatch/getSlWait/" + user_id,
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
      console.log(obj);
      readTcOrder(user_id, fullname, tcMatch, tbMatch, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readTcOrder(user_id, fullname, tcMatch, tbMatch, waitMatch) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyRental/getTcOrder/" + user_id,
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
      console.log(obj);
      readTbOrder(user_id, fullname, tcMatch, tbMatch, waitMatch, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readTbOrder(user_id, fullname, tcMatch, tbMatch, waitMatch, tcOrder) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyRental/getTcOrder/" + user_id,
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
      console.log(obj);
      readWaitOrder(
        user_id,
        fullname,
        tcMatch,
        tbMatch,
        waitMatch,
        tcOrder,
        obj
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readWaitOrder(
  user_id,
  fullname,
  tcMatch,
  tbMatch,
  waitMatch,
  tcOrder,
  tbOrder
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/requestPitch/getSlWait/" + user_id,
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
      console.log(obj);
      readListUser(
        user_id,
        fullname,
        tcMatch,
        tbMatch,
        waitMatch,
        tcOrder,
        tbOrder,
        obj
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readListUser(
  id,
  fullname,
  tcMatch,
  tbMatch,
  waitMatch,
  tcOrder,
  tbOrder,
  waitOrder
) {
  var slbd = tcMatch + tbMatch + waitMatch;
  var slds = tcOrder + tbOrder + waitOrder;
  document.getElementById("listUser").innerHTML +=
    "<tr>" +
    "    <th>" +
    id +
    "</th>" +
    '<th><a href="profile.html?user_id=' +
    id +
    '">' +
    fullname +
    "</a></th>" +
    "    <th>" +
    slbd +
    "</th>" +
    "    <th>" +
    tcMatch +
    "</th>" +
    "    <th>" +
    tbMatch +
    "</th>" +
    "    <th>" +
    waitMatch +
    "</th>" +
    "    <th>" +
    slds +
    "</th>" +
    "    <th>" +
    tcOrder +
    "</th>" +
    "    <th>" +
    tbOrder +
    "</th>" +
    "    <th>" +
    waitOrder +
    "</th>" +
    '    <td align="right" style="text-align:right">' +
    '        <div class="form-group">' +
    '            <a id ="Active" onclick="myFunction1(' +
    id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-check-o"></i>Active</a>' +
    "        </div>" +
    '        <div class="form-group">' +
    '            <a id ="Deactive" onclick="myFunction2(' +
    id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-times-o"></i>Deactive</a>' +
    "        </div>" +
    "    </td>" +
    "</tr>";
}
function myFunction1(id) {
  console.log("sdss" + id);
  $.ajax({
    type: "POST",
    url: HOST + "/football/user/updateStatusById1/" + id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("thanh cong");
      alert("Tài khoản chuyển sang trạng thái hoạt động");
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function myFunction2(id) {
  console.log("sdss2" + id);
  $.ajax({
    type: "POST",
    url: HOST + "/football/user/updateStatusById2/" + id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("thanh cong");
      alert("Tài khoản chuyển sang trạng thái vô hiệu hóa");
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readUser22(fullname, image) {
  console.log("jdjsjidooooooooooooooo");
  document.getElementById("liUser").innerHTML +=
    '<button class="dropbtn"><img src="' +
    image +
    '" class="avatar img-fluid rounded-circle">' +
    fullname +
    "</button>" +
    '                                <div class="dropdown-content">' +
    '                                    <a href="thongtincanhan.html"><i class="fa fa-user"></i>Profile</a>' +
    '                                    <a href="dsuser.html"><i class="fa fa-history"></i>Danh Sách User</a>' +
    '                                    <button id = "logout" style="text-align:left ;border-radius: 0px; width: 190px;"><i class="fa fa-sign-out"></i>Logout →</button>' +
    "                                </div>";
  $("#logout").click(function () {
    console.log("logout button is pressed");
    $.ajax({
      type: "POST",
      url: HOST + "/testUser/logout",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      xhrFields: {
        withCredentials: true,
      },
      success: function (result) {
        console.log("thanh cong");
        window.location.replace("http://localhost:5502/index.html");
      },
      error: function () {
        console.log("da co loi");
      },
    });
  });
}
