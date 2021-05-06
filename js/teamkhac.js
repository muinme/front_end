const HOST = "http://traibonglan.com:8080";
$(document).ready(function () {
  var id = GetURLParameter("football_id");
  console.log(id);
  var id2 = GetURLParameter("user_id");
  console.log(id2);
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/" + id,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      var obj = result;
      console.log(id2);
      readTeamFootBall(obj.name, id2);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readTeamFootBall(name, id2) {
  console.log(id2);
  console.log(name);
  $.ajax({
    type: "GET",
    url: HOST + "/football/userById/" + id2,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result2) {
      var obj2 = result2;
      console.log(
        "object= " + JSON.stringify(obj2) + "\nid = " + obj2.fullname
      );
      readTeamFootBall2(name, obj2.fullname);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readTeamFootBall2(name, fullname) {
  document.getElementById("tTeam").innerHTML +=
    '<div class="img-doio"><img class="img-responsive" src="/images/tu.jpg" align="thumb"></div>' +
    '<div class="title-doi">' +
    '   <h1 style="text-align: left;">' +
    name +
    '<span class="gender"></span></h1>' +
    '   <p class="captain-item" owner-id="7054">' +
    '      <span style="color: #ffffff;font-size: 15px !important;">' +
    '         <a href="/user/profile/7054" style="color: #ffffff;font-size: 18px !important;color: #ffffff;">' +
    "            " +
    fullname +
    "</a> (đội trưởng)" +
    '         <span class="captain-item-status offline"></span>' +
    "      </span>" +
    '      <span class="chat-nhanh chat-nhanh-offline" ng-click="onQuickChat(7054);"' +
    '         title="Click để chat nhanh với đối."><i class="fa fa-comments" aria-hidden="true"></i> Nói' +
    "         chuyện</span>" +
    "   </p>" +
    "</div>";
}
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
