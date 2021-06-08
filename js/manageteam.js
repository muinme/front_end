document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$(document).ready(function () {
  console.log("vll");
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/getAll",
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
        readTcOrderMatch(obj.id, obj.name, obj.created);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readTcOrderMatch(football_id, name, created) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyMatch/getTcOrderMatch/" + football_id,
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
      readTbOrderMatch(football_id, name, created, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readTbOrderMatch(football_id, name, created, tcOrderMatch) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyMatch/getTbOrderMatch/" + football_id,
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
      readWaitMatch(football_id, name, created, tcOrderMatch, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readWaitMatch(football_id, name, created, tcOrderMatch, tbOrderMatch) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/requestMatch/getSlWaitTeam/" + football_id,
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
      readWaitPost(football_id, name, created, tcOrderMatch, tbOrderMatch, obj);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readWaitPost(
  football_id,
  name,
  created,
  tcOrderMatch,
  tbOrderMatch,
  waitMatch
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/postMatchTeam/getSlWaitPost/" + football_id,
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
      readWaitPostDel(
        football_id,
        name,
        created,
        tcOrderMatch,
        tbOrderMatch,
        waitMatch,
        obj
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readWaitPostDel(
  football_id,
  name,
  created,
  tcOrderMatch,
  tbOrderMatch,
  waitMatch,
  postWait
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/postMatchTeam/getSlWaitPostDel/" + football_id,
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
      readListMatch(
        football_id,
        name,
        created,
        tcOrderMatch,
        tbOrderMatch,
        waitMatch,
        postWait,
        obj
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readListMatch(
  football_id,
  name,
  created,
  tcOrderMatch,
  tbOrderMatch,
  waitMatch,
  postWait,
  postWaitDel
) {
  var slds = tcOrderMatch + tbOrderMatch + waitMatch;
  var pw = postWait + postWaitDel;
  document.getElementById("listUser").innerHTML +=
    "<tr>" +
    "    <th>" +
    football_id +
    "</th>" +
    '<th><a href="profile.html?user_id=' +
    football_id +
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
    tcOrderMatch +
    "</th>" +
    "    <th>" +
    tbOrderMatch +
    "</th>" +
    "    <th>" +
    waitMatch +
    "</th>" +
    "</th>" +
    "    <th>" +
    pw +
    "</th>" +
    "    <th>" +
    postWait +
    "</th>" +
    "    <th>" +
    postWaitDel +
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
        window.location.replace("http://localhost:5502/index.html");
      },
      error: function () {
        console.log("da co loi");
      },
    });
  });
}
