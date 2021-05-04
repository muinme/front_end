const HOST = "http://localhost:8080";
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/football/requestPitch/Username",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log(result);
      for (var key in result) {
        var obj = result[key];
        console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.id);
        readUser2(
          obj.user_id,
          obj.id,
          obj.pitch_id,
          obj.created,
          obj.pitch_detail_id
        );
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
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
      readUserProfile(obj.fullname, obj.image, obj.id);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readUser2(user_id, id, pitch_id, created, pitch_detail_id) {
  console.log("íidj" + user_id);
  console.log("sss" + created);
  console.log("sds" + pitch_detail_id);
  $.ajax({
    type: "GET",
    url: HOST + "/football/userById/" + user_id,
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
      console.log("ok chua" + obj.fullname);
      readPost(
        obj.fullname,
        obj.phone,
        obj.email,
        id,
        pitch_id,
        created,
        pitch_detail_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readPost(
  fullname,
  phone,
  email,
  id,
  pitch_id,
  created,
  pitch_detail_id
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/detailPitch/" + pitch_detail_id,
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
      readTime(
        fullname,
        phone,
        email,
        id,
        pitch_id,
        created,
        pitch_detail_id,
        obj.timeslot_id,
        obj.day_id,
        obj.number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readYeuCauFinal(
  fullname,
  phone,
  email,
  id,
  namePitch,
  created,
  pitch_detail_id,
  time,
  day,
  number_pitch_id
) {
  document.getElementById("tbYeuCau").innerHTML +=
    '<tr class="ng-scope" style="text-align: left;">' +
    '    <td class="ng-binding"> Sân số ' +
    number_pitch_id +
    "</td>" +
    "    <td>" +
    '    <span class="ng-scope">' +
    namePitch +
    "</span><!-- end ngIf: stadium.TypeId==1 -->" +
    "    </td>" +
    "    <td>" +
    '        <a href="#/stadium-info/1362"><strong class="ng-binding">' +
    fullname +
    "</strong></a>" +
    '    <div class="ng-scope">' +
    '            <i class="fa fa-phone-square"></i> <a href="tel:0333157596" class="ng-binding">' +
    phone +
    "</a>" +
    "        </div>" +
    '        <div class="ng-scope">' +
    '            <i class="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:phamanhtu242@gmail.com" target="_top" class="ng-binding">' +
    email +
    "</a>" +
    "        </div>" +
    "    </td>" +
    "    <td>" +
    '        <span class="ng-scope">' +
    time +
    "</span>" +
    "        </td>" +
    "        <td>" +
    '            <span class="ng-scope">' +
    day +
    "</span><!-- end ngIf: stadium.TypeId==1 -->" +
    "        </td>" +
    '    <td align="right" style="text-align:right">' +
    '        <div class="form-group">' +
    '            <a id ="ChapNhan" onclick="myFunction1(' +
    id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-check-o"></i>Chấp Nhận</a>' +
    "        </div>" +
    '        <div class="form-group">' +
    '            <a id ="TuChoi" onclick="myFunction2(' +
    id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-times-o"></i>Từ Chối</a>' +
    "        </div>" +
    "    </td>" +
    "</tr>";
}
function myFunction1(id) {
  console.log("sdss" + id);
  $.ajax({
    type: "POST",
    url: HOST + "/football/historyRental1/create/" + id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("thanh cong");
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function myFunction2(id) {
  console.log("sdss" + id);
  $.ajax({
    type: "POST",
    url: HOST + "/football/historyRental2/create/" + id,

    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("thanh cong");
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readTime(
  fullname,
  phone,
  email,
  id,
  pitch_id,
  created,
  pitch_detail_id,
  timeslot_id,
  day_id,
  number_pitch_id
) {
  console.log("dmmmmmmmm callllllllll" + timeslot_id);
  $.ajax({
    type: "GET",
    url: HOST + "/football/timeSlotPitch/" + timeslot_id,
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
      readDay(
        fullname,
        phone,
        email,
        id,
        pitch_id,
        created,
        pitch_detail_id,
        obj.timeslot_detail,
        day_id,
        number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readDay(
  fullname,
  phone,
  email,
  id,
  pitch_id,
  created,
  pitch_detail_id,
  time,
  day_id,
  number_pitch_id
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/dayOfWeek/" + day_id,
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
      readPitch(
        fullname,
        phone,
        email,
        id,
        pitch_id,
        created,
        pitch_detail_id,
        time,
        obj.name,
        number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readPitch(
  fullname,
  phone,
  email,
  id,
  pitch_id,
  created,
  pitch_detail_id,
  time,
  day,
  number_pitch_id
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/pitch/" + pitch_id,
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
      readYeuCauFinal(
        fullname,
        phone,
        email,
        id,
        obj.name,
        created,
        pitch_detail_id,
        time,
        day,
        number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readUserProfile(fullname, image, id) {
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
