document.write('<script type="text/javascript" src="/js/host.js" ></script>');
$(document).ready(function () {
  getAllTeam();
  readTTp();
  readTimeAction();
});

function getAllTeam() {
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/getAll",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      // console.log("sss" + result);
      //console.log("thanh cong " + resultss);
      for (var key in result) {
        var obj = result[key];
        readTeam(
          obj.id,
          obj.name,
          obj.logo,
          obj.image,
          obj.actiontime,
          obj.level,
          obj.home_yard,
          obj.address,
          obj.introduce
        );
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readTeam(
  id,
  name,
  logo,
  image,
  actiontime,
  level,
  home_yard,
  address,
  introduce
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/userByFootBallId/" + id,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result1) {
      // console.log("sss" + result1);
      var obj1 = result1;
      readListTeam(
        id,
        name,
        logo,
        image,
        actiontime,
        level,
        home_yard,
        address,
        introduce,
        obj1.fullname,
        obj1.id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readListTeam(
  id,
  name,
  logo,
  image,
  actiontime,
  level,
  home_yard,
  address,
  introduce,
  fullname,
  user_id
) {
  document.getElementById("listTeam").innerHTML +=
    '<div class="row">' +
    '  <div class="col-md-5 item-preview-image">' +
    '    <a href="profileteamfootball.html?football_id=' +
    id +
    "&user_id=" +
    user_id +
    '" title="' +
    name +
    '"' +
    "      ><img" +
    '        class="img-responsive"' +
    '        src="' +
    image +
    '"' +
    '        alt="' +
    name +
    '"' +
    '        align="thumbnail"' +
    "    /></a>" +
    "  </div>" +
    '  <div class="col-md-7 right-item-san right-item-doi">' +
    '    <div class="header-item-doi">' +
    '      <h2><a href="profileteamfootball.html?football_id=' +
    id +
    "&user_id=" +
    user_id +
    '" title="' +
    name +
    '">' +
    name +
    "</a></h2>" +
    "    </div>" +
    '    <p class="team-leader-name user-online-status-container">' +
    '      <a href="profile.html?user_id=' +
    user_id +
    '"' +
    '        ><i class="fa fa-user" aria-hidden="true"></i>' +
    fullname +
    "</a" +
    "      >" +
    '      <span class="captain-item-status hide online"></span>' +
    '      <span class="chat-nhanh" ng-click="onQuickChat(8082);" title="Click để chat nhanh với đối."><i class="fa fa-comments" aria-hidden="true"></i> Nói chuyện</span' +
    "      >" +
    "    </p>" +
    "    <p>" +
    '      <i class="fa fa-shirtsinbulk" aria-hidden="true"></i>' +
    "      <strong>Trình độ: </strong> " +
    level +
    "" +
    "    </p>" +
    "    <p>" +
    '      <i class="fa fa-shirtsinbulk" aria-hidden="true"></i>' +
    "      <strong>Thời gian hoạt động: </strong> " +
    actiontime +
    "" +
    "    </p>" +
    "" +
    "    <p>" +
    '      <i class="fa fa-shirtsinbulk" aria-hidden="true"></i>' +
    "      <strong> Sân nhà:</strong" +
    '      ><a href="san-bong-da-ho-den-lu-1.html"' +
    "        >" +
    home_yard +
    "</a" +
    "      >" +
    "    </p>" +
    "    <p>" +
    '      <i class="fa fa-map-o" aria-hidden="true"></i' +
    "      ><strong> Địa chỉ:</strong>" +
    address +
    "" +
    "    </p>" +
    '    <p class="quost-doi">' +
    introduce +
    "</p>" +
    "  </div>" +
    "</div>";
}

function readTTp() {
  $.ajax({
    type: "GET",
    url: "https://api.mysupership.vn/v1/partner/areas/province",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      console.log("sss" + result);
      for (var key in result) {
        var obj = result[key];
        for (key2 in obj) {
          var obj2 = obj[key2];
          LocTinh(obj2.name, obj2.code);
        }
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function LocTinh(nameTinh, code) {
  if (!nameTinh) {
  } else {
    document.getElementById("selTinh").innerHTML +=
      '<option value="' + code + '">' + nameTinh + "</option>";
  }
}

$("#selTinh").change(function () {
  document.getElementById("selQH").innerHTML = "";
  var value = $(this).val();
  readQH(value);
});

function readQH(value) {
  //   var tinh = $("#selTinh").children("option:selected").text();
  console.log("change function " + value);
  $.ajax({
    type: "GET",
    url:
      "https://api.mysupership.vn/v1/partner/areas/district?province=" + value,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      for (var key in result) {
        var obj = result[key];
        for (key2 in obj) {
          var obj2 = obj[key2];
          LocQH(obj2.name, obj2.code);
        }
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function LocQH(nameQH, code) {
  if (!nameQH) {
  } else {
    document.getElementById("selQH").innerHTML +=
      '<option value="' + code + '">' + nameQH + "</option>";
  }
}

$("#selQH").change(function () {
  document.getElementById("selPX").innerHTML = "";
  var value = $(this).val();
  readPX(value);
});

function readPX(value) {
  $.ajax({
    type: "GET",
    url:
      "https://api.mysupership.vn/v1/partner/areas/commune?district=" + value,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      console.log("sss" + result);
      //console.log("thanh cong " + resultss);
      for (var key in result) {
        var obj = result[key];
        for (key2 in obj) {
          var obj2 = obj[key2];
          LocPX(obj2.name, obj2.code);
        }
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function LocPX(namePX, code) {
  if (!namePX) {
  } else {
    document.getElementById("selPX").innerHTML +=
      '<option value="' + code + '">' + namePX + "</option>";
  }
}

function searchTeam1() {
  document.getElementById("listTeam").innerHTML = "";
  var tinh = $("#selTinh").children("option:selected").text();
  var qh = $("#selQH").children("option:selected").text();
  if (!qh) {
    console.log("dmmm");
  } else {
    $.ajax({
      type: "GET",
      url: HOST + "/football/teamFootBall/" + tinh + "/" + qh,
      dataType: "JSON",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (result) {
        for (var key in result) {
          var obj = result[key];
          console.log(obj);
          readTeam(
            obj.id,
            obj.name,
            obj.logo,
            obj.image,
            obj.actiontime,
            obj.level,
            obj.home_yard,
            obj.address,
            obj.introduce
          );
        }
      },
      error: function () {
        console.log("da co loi");
      },
    });
  }
}

function AllTeam() {
  document.getElementById("listTeam").innerHTML = "";
  getAllTeam();
}

function readTimeAction() {
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/actionTime",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      for (var i = 0; i < result.length; i++) {
        LocActionTime(result[i]);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function LocActionTime(actionTime) {
  if (!actionTime) {
  } else {
    document.getElementById("selHour").innerHTML +=
      '<option value="">' + actionTime + "</option>";
  }
}

function searchTeam2() {
  document.getElementById("listTeam").innerHTML = "";
  var actionTime = $("#selHour").children("option:selected").text();
  var level = $("#selTd").children("option:selected").text();
  if (!level || !actionTime) {
  } else {
    $.ajax({
      type: "GET",
      url:
        HOST +
        "/football/teamFootBall/getByActionTimeAndLevel/" +
        actionTime +
        "/" +
        level,
      dataType: "JSON",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (result) {
        for (var key in result) {
          var obj = result[key];
          console.log(obj);
          readTeam(
            obj.id,
            obj.name,
            obj.logo,
            obj.image,
            obj.actiontime,
            obj.level,
            obj.home_yard,
            obj.address,
            obj.introduce
          );
        }
      },
      error: function () {
        console.log("da co loi");
      },
    });
  }
}
