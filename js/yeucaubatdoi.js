$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/football/requestMatch/Username",
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
      console.log(obj.user_id);
      console.log("id request" + obj.id);
      readUser(obj.user_id, obj.id, obj.created, obj.wait_match_team_id);
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
      readUser(obj.fullname, obj.image, obj.id);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readUser(user_id, id, created, wait_match_team_id) {
  console.log(user_id);
  console.log(created);
  console.log(wait_match_team_id);
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
      console.log(obj.fullname);
      readPost(
        obj.fullname,
        obj.phone,
        obj.email,
        id,
        created,
        wait_match_team_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readPost(fullname, phone, email, id, created, wait_match_team_id) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/postMatchTeam/" + wait_match_team_id,
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
      readYeuCau(
        fullname,
        phone,
        email,
        id,
        created,
        wait_match_team_id,
        obj.playtime,
        obj.playdate,
        obj.nameyard,
        obj.category
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readYeuCau(
  fullname,
  phone,
  email,
  id,
  created,
  wait_match_team_id,
  playtime,
  playdate,
  nameyard,
  category
) {
  console.log(fullname);
  document.getElementById("tbYeuCau").innerHTML +=
    '    <tr class="ng-scope" style="text-align: left;">' +
    '        <td class="ng-binding">1</td>' +
    "        <td>" +
    '           <a><strong class="ng-binding">' +
    fullname +
    "</strong></a>" +
    '       <div class="ng-scope">' +
    '               <i class="fa fa-phone-square"></i> <a class="ng-binding">' +
    phone +
    "</a>" +
    "           </div>" +
    '           <div class="ng-scope">' +
    '               <i class="fa fa-envelope-o" aria-hidden="true"></i> <a class="ng-binding"> ' +
    email +
    "</a>" +
    "           </div>" +
    "       </td>" +
    "        <td>" +
    '           <i class="fa fa-clock-o"></i><a><strong class="ng-binding">' +
    playtime +
    " " +
    playdate +
    "</strong></a>" +
    '           <div class="ng-scope">' +
    '                   <i class="fa fa-bookmark"></i> <a class="ng-binding">' +
    nameyard +
    "</a>" +
    "               </div>" +
    '               <div class="ng-scope">' +
    '                   <i class="fa fa-asl-interpreting"></i> <a class="ng-binding">Kèo: ' +
    category +
    "</a>" +
    "               </div>" +
    "        </td>" +
    "        <td>" +
    '           <i class="fa fa-clock-o"></i><a><strong class="ng-binding">' +
    created +
    "</strong></a>" +
    "            </td>" +
    '        <td align="right" style="text-align:right">' +
    '            <div class="form-group">' +
    '                <a href="#" id ="ChapNhan"class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-check-o"></i>Chấp Nhận</a>' +
    "            </div>" +
    '            <div class="form-group">' +
    '                <a href="#" id ="TuChoi"class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-times-o"></i>Từ Chối</a>' +
    "            </div>" +
    "        </td>" +
    "    </tr>";
  $("#ChapNhan").click(function () {
    console.log("vcl");
    $.ajax({
      type: "POST",
      url: HOST + "/football/historyMatch1/create/" + id,
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
  });
  $("#TuChoi").click(function () {
    console.log("vcl");
    $.ajax({
      type: "POST",
      url: HOST + "/football/historyMatch2/create/" + id,
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
  });
}
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
      readUser2(obj.fullname, obj.image, obj.id);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
function readUser2(fullname, image, id) {
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
