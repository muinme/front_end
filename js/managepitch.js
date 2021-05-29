document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$(document).ready(function () {
  console.log("vll");
  $.ajax({
    type: "GET",
    url: HOST + "/football/pitch/getAll",
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
        console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.created);
        readTcOrderPitch(obj.id, obj.name, obj.created);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readTcOrderPitch(pitch_id, name, created) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyRental/getTcOrderPitch/" + pitch_id,
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
      readTbOrderPitch(pitch_id, name, created, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readTbOrderPitch(pitch_id, name, created, tcOrderPitch) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyRental/getTbOrderPitch/" + pitch_id,
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
      readWaitPitch(pitch_id, name, created, tcOrderPitch, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readWaitPitch(pitch_id, name, created, tcOrderPitch, tbOrderPitch) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/requestPitch/getSlWaitPitch/" + pitch_id,
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
      readListPitch(pitch_id, name, created, tcOrderPitch, tbOrderPitch, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readTcOrder(pitch_id, name, created, tcOrderPitch, tbOrderPitch, obj) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyRental/getTcOrder/" + pitch_id,
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

function readListPitch(
  pitch_id,
  name,
  created,
  tcOrderPitch,
  tbOrderPitch,
  waitPitch
) {
  var slds = tcOrderPitch + tbOrderPitch + waitPitch;
  document.getElementById("listUser").innerHTML +=
    "<tr>" +
    "    <th>" +
    pitch_id +
    "</th>" +
    '<th><a href="profile.html?user_id=' +
    pitch_id +
    '">' +
    name +
    "</a></th>" +
    "    <th>" +
    created +
    "</th>" +
    "    <th>" +
    slds +
    "</th>" +
    "    <th>" +
    tcOrderPitch +
    "</th>" +
    "    <th>" +
    tbOrderPitch +
    "</th>" +
    "    <th>" +
    waitPitch +
    "</th>" +
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
