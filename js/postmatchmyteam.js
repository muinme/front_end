document.write('<script type="text/javascript" src="/js/host.js" ></script>');

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
    url: HOST + "/football/postMatchTeam/Username",
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
});
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
      '            <div class="dropdown">' +
      '                <button class="dropbtn">Tác vụ</button>' +
      '<div class="dropdown-content">' +
      '    <a onclick="myFunction(' +
      id +
      ')">Đã có đối</a>' +
      '    <a onclick="myFunction2(' +
      id +
      ')">Hủy bài đăng</a>' +
      "  </div>" +
      "              </div>" +
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
function myFunction(id) {
  console.log("sdss" + id);
  $.ajax({
    type: "POST",
    url: HOST + "/football/postMatchTeam/delete/" + id,
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
    url: HOST + "/football/postMatchTeam/delete/" + id,
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
function readUser(fullname, image) {
  console.log("jdjsjidooooooooooooooo");
  document.getElementById("liUser").innerHTML +=
    '<button class="dropbtn"><img src="' +
    image +
    '" class="avatar img-fluid rounded-circle">' +
    fullname +
    "</button>" +
    '                                <div class="dropdown-content">' +
    '                                    <a href="myprofile.html"><i class="fa fa-user"></i>Profile</a>' +
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
        window.location.replace("http://traibonglan.comm/index.html");
      },
      error: function () {
        console.log("da co loi");
      },
    });
  });
}
