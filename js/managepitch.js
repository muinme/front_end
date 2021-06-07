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
      readsumRevenuePitch(
        pitch_id,
        name,
        created,
        tcOrderPitch,
        tbOrderPitch,
        obj
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readsumRevenuePitch(
  pitch_id,
  name,
  created,
  tcOrderPitch,
  tbOrderPitch,
  waitPitch
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/sumRevenuePitch/" + pitch_id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var obj;
      if (!result) {
        obj = 0;
      } else {
        obj = result;
      }

      readsumRevenueAll(
        pitch_id,
        name,
        created,
        tcOrderPitch,
        tbOrderPitch,
        waitPitch,
        obj
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readsumRevenueAll(
  pitch_id,
  name,
  created,
  tcOrderPitch,
  tbOrderPitch,
  waitPitch,
  sumRevenuePitch
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/sumRevenueAll/" + pitch_id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var obj;
      if (!result) {
        obj = 0;
      } else {
        obj = result;
      }

      console.log("dmm" + obj + " " + pitch_id);
      console.log("dmm2" + obj);
      readListPitch(
        pitch_id,
        name,
        created,
        tcOrderPitch,
        tbOrderPitch,
        waitPitch,
        sumRevenuePitch,
        obj
      );
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
  waitPitch,
  sumRevenuePitch,
  sumRevenueAll
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
    "    <th>" +
    sumRevenuePitch +
    "</th>" +
    "    <th>" +
    sumRevenueAll +
    "</th>" +
    "</tr>";
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
        window.location.replace("http://traibonglan.com/index.html");
      },
      error: function () {
        console.log("da co loi");
      },
    });
  });
}
