document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$(document).ready(function () {
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

function creatematch() {
  console.log("vcllllll");
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/sl/Username",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      if (result == 0) {
        swal(
          {
            title: "Bạn chưa có đội bóng?",
            text: "Bạn muốn tạo đội bóng chứ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Đồng ý",
            closeOnConfirm: false,
          },
          function () {
            window.location.replace("http://localhost:5501/createteam.html");
          }
        );
      } else {
        window.location.replace("http://localhost:5501/creatematch.html");
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
