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
      " ng??y " +
      playdate +
      "</a>" +
      "            </h2>" +
      '            <div class="dropdown">' +
      '                <button class="dropbtn">T??c v???</button>' +
      '<div class="dropdown-content">' +
      '    <a onclick="myFunction(' +
      id +
      ')">???? c?? ?????i</a>' +
      '    <a onclick="myFunction2(' +
      id +
      ')">H???y b??i ????ng</a>' +
      "  </div>" +
      "              </div>" +
      '              <link rel="stylesheet" href="css/mypost.css">' +
      "            <p>" +
      '                <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                    aria-hidden="true"></i><strong>?????i' +
      "                    b??ng:</strong><a>" +
      name +
      "" +
      "                    </a>" +
      "            </p>" +
      '                <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                    aria-hidden="true"></i><strong>S??n' +
      "                    nh??:</strong><a>" +
      nameyard +
      "" +
      "                    </a>" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-map-o"' +
      '                    aria-hidden="true"></i><strong>?????a ch???:</strong>' +
      address +
      "" +
      "                </p>" +
      '                <p class="item-stadium-address"><i class="fa fa-map-o"' +
      '                    aria-hidden="true"></i><strong>Tr??nh' +
      "                    ?????:</strong>" +
      levelwant +
      "" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                aria-hidden="true"></i><strong>K??o:</strong>' +
      "                " +
      category +
      "" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                aria-hidden="true"></i><strong>Tr???ng' +
      "                    th??i:</strong>" +
      '                <span class="red">C??n hi???u l???c</span>' +
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
      " ng??y " +
      playdate +
      "</a>" +
      "            </h2>" +
      '              <link rel="stylesheet" href="css/mypost.css">' +
      "            <p>" +
      '                <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                    aria-hidden="true"></i><strong>?????i' +
      "                    b??ng:</strong><a>" +
      name +
      "" +
      "                    </a>" +
      "            </p>" +
      '                <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                    aria-hidden="true"></i><strong>S??n' +
      "                    nh??:</strong><a>" +
      nameyard +
      "" +
      "                    </a>" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-map-o"' +
      '                    aria-hidden="true"></i><strong>?????a ch???:</strong>' +
      address +
      "" +
      "                </p>" +
      '                <p class="item-stadium-address"><i class="fa fa-map-o"' +
      '                    aria-hidden="true"></i><strong>Tr??nh' +
      "                    ?????:</strong>" +
      levelwant +
      "" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                aria-hidden="true"></i><strong>K??o:</strong>' +
      "                " +
      category +
      "" +
      "            </p>" +
      '            <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
      '                aria-hidden="true"></i><strong>Tr???ng' +
      "                    th??i:</strong>" +
      '                <span class="red">???? ???????c g??? b???</span>' +
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
            title: "B???n ch??a c?? ?????i b??ng?",
            text: "B???n mu???n t???o ?????i b??ng ch????",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "?????ng ??",
            closeOnConfirm: false,
          },
          function () {
            window.location.replace("http://traibonglan.com/createteam.html");
          }
        );
      } else {
        window.location.replace("http://traibonglan.com/creatematch.html");
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
