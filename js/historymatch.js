$(document).ready(function () {
  console.log("vll");
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyMatch/getListByUserName",
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
        readPost(obj.id, obj.status, obj.request_match_id);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readPost(id, status, request_match_id) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/postMatchTeam/getInfo/" + request_match_id,
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
      readNameTeam(
        id,
        status,
        obj.football_id,
        obj.home_guest,
        obj.nameyard,
        obj.playtime,
        obj.playdate,
        obj.category
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readNameTeam(
  id,
  status,
  football_id,
  home_guest,
  nameyard,
  playtime,
  playdate,
  category
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/getNameTeam/" + football_id,
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
      readListHistoryMatch(
        id,
        status,
        obj.name,
        home_guest,
        nameyard,
        playtime,
        playdate,
        category
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readListHistoryMatch(
  id,
  status,
  name,
  home_guest,
  nameyard,
  playtime,
  playdate,
  category
) {
  if (status == "0") {
    document.getElementById("listHMatch").innerHTML +=
      "<tr>" +
      "    <th>" +
      id +
      "</th>" +
      '<th><a href="profile.html?user_id=' +
      id +
      '">' +
      name +
      "</a></th>" +
      "    <th>" +
      home_guest +
      "</th>" +
      "    <th>" +
      nameyard +
      "</th>" +
      "    <th>" +
      playtime +
      "</th>" +
      "    <th>" +
      playdate +
      "</th>" +
      "    <th>" +
      category +
      "</th>" +
      "    <th>" +
      "</th>" +
      '<th><a class="fa fa-close"></a></th>' +
      "</tr>";
  }
  if (status == "1") {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    document.getElementById("listHMatch").innerHTML +=
      "<tr>" +
      "    <th>" +
      id +
      "</th>" +
      '<th><a href="profile.html?user_id=' +
      id +
      '">' +
      name +
      "</a></th>" +
      "    <th>" +
      home_guest +
      "</th>" +
      "    <th>" +
      nameyard +
      "</th>" +
      "    <th>" +
      playtime +
      "</th>" +
      "    <th>" +
      playdate +
      "</th>" +
      "    <th>" +
      category +
      "</th>" +
      "    <th>" +
      '<a class="fa fa-check"></a></th>';
    "</th>" + "    <th>" + "</th>" + "</tr>";
  }
}
