document.write('<script type="text/javascript" src="/js/host.js" ></script>');
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
      readPost(id);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readTeamFootBall(name, id2) {
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
      readTeamFootBall2(name, obj2.fullname, obj2.image, obj2.id);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readTeamFootBall2(name, fullname, image, id) {
  document.getElementById("tTeam").innerHTML +=
    '<div class="img-doio"><img class="img-responsive" src="' +
    image +
    '" align="thumb"></div>' +
    '<div class="title-doi">' +
    '   <h1 style="text-align: left;">' +
    name +
    '<span class="gender"></span></h1>' +
    '   <p class="captain-item" owner-id="7054">' +
    '      <span style="color: #ffffff;font-size: 15px !important;">' +
    '         <a href="profile.html?user_id=' +
    id +
    '" style="color: #ffffff;font-size: 18px !important;color: #ffffff;">' +
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

function readPost(football_id) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/postMatchTeam/getByFootBallId/" + football_id,
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
        console.log(obj);
        readMyTeam(
          obj.id,
          obj.football_id,
          obj.playtime,
          obj.playdate,
          obj.address,
          obj.home_guest,
          obj.nameyard,
          obj.category,
          obj.levelwant,
          obj.note,
          obj.status
        );
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readMyTeam(
  id,
  football_id,
  playtime,
  playdate,
  address,
  home_guest,
  nameyard,
  category,
  levelwant,
  note,
  status
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/" + football_id,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result2) {
      var obj2 = result2;

      readMyPost(
        id,
        obj2.name,
        playtime,
        playdate,
        address,
        home_guest,
        nameyard,
        category,
        levelwant,
        note,
        status
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readMyPost(
  id,
  name,
  playtime,
  playdate,
  address,
  home_guest,
  nameyard,
  category,
  levelwant,
  note,
  status
) {
  if (status == "1") {
    document.getElementById("listMatch").innerHTML +=
      '<li class="item-card match-finding-item">' +
      '    <div class="row">' +
      '        <div class="col-md-12 right-item-san right-item-doi">' +
      '            <h2 class="team-match-headlink">' +
      '                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>' +
      "                <a>" +
      playtime +
      " ngày " +
      playdate +
      "</a>" +
      "            </h2>" +
      '              <link rel="stylesheet" href="css/mypost.css">' +
      "            <p>" +
      '                <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                    aria-hidden="true"></i><strong>Đội' +
      "                    bóng:</strong><a>" +
      name +
      "" +
      "                    </a>" +
      "            </p>" +
      '                <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                    aria-hidden="true"></i><strong>Sân' +
      "                    nhà:</strong><a>" +
      nameyard +
      "" +
      "                    </a>" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-map-o"' +
      '                    aria-hidden="true"></i><strong>Địa chỉ:</strong>' +
      address +
      "" +
      "                </p>" +
      '                <p class="item-stadium-address"><i class="fa fa-map-o"' +
      '                    aria-hidden="true"></i><strong>Trình' +
      "                    độ:</strong>" +
      levelwant +
      "" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                aria-hidden="true"></i><strong>Kèo:</strong>' +
      "                " +
      category +
      "" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                aria-hidden="true"></i><strong>Trạng' +
      "                    thái:</strong>" +
      '                <span class="red">Còn hiệu lực</span>' +
      "            </p>" +
      '<p class="quost-doi">' +
      " " +
      note +
      " " +
      "</p>";
    "        </div>" + "    </div>" + "</li>";
  } else {
    document.getElementById("listMatch").innerHTML +=
      '<li class="item-card match-finding-item">' +
      '    <div class="row">' +
      '        <div class="col-md-12 right-item-san right-item-doi">' +
      '            <h2 class="team-match-headlink">' +
      '                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>' +
      "                <a>" +
      playtime +
      " ngày " +
      playdate +
      "</a>" +
      "            </h2>" +
      '              <link rel="stylesheet" href="css/mypost.css">' +
      "            <p>" +
      '                <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                    aria-hidden="true"></i><strong>Đội' +
      "                    bóng:</strong><a>" +
      name +
      "" +
      "                    </a>" +
      "            </p>" +
      '                <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                    aria-hidden="true"></i><strong>Sân' +
      "                    nhà:</strong><a>" +
      nameyard +
      "" +
      "                    </a>" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-map-o"' +
      '                    aria-hidden="true"></i><strong>Địa chỉ:</strong>' +
      address +
      "" +
      "                </p>" +
      '                <p class="item-stadium-address"><i class="fa fa-map-o"' +
      '                    aria-hidden="true"></i><strong>Trình' +
      "                    độ:</strong>" +
      levelwant +
      "" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                aria-hidden="true"></i><strong>Kèo:</strong>' +
      "                " +
      category +
      "" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                aria-hidden="true"></i><strong>Trạng' +
      "                    thái:</strong>" +
      '                <span class="red">Đã được gỡ bỏ</span>' +
      "            </p>" +
      '<p class="quost-doi">' +
      " " +
      note +
      " " +
      "</p>";
    "        </div>" + "    </div>" + "</li>";
  }
}
