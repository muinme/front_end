// Get the modal
document.write('<script type="text/javascript" src="/js/host.js" ></script>');
$(document).ready(function () {
  getAllPost();
  readTTp();
  readTimeAction();
});

function getAllPost() {
  $.ajax({
    type: "GET",
    url: HOST + "/football/postMatchTeam/getAll",
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
        //create li post
        readPost(
          obj.id,
          obj.home_guest,
          obj.playtime,
          obj.playdate,
          obj.nameyard,
          obj.address,
          obj.levelwant,
          obj.category,
          obj.note,
          obj.football_id
        );
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readPost(
  id,
  home_guest,
  playtime,
  playdate,
  nameyard,
  address,
  levelwant,
  category,
  note,
  football_id
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/userByFootBallId/" + football_id,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result1) {
      // console.log("sss" + result1);
      var obj1 = result1;
      // console.log(
      //   "object= " + JSON.stringify(obj1) + "\nid = " + obj1.fullname

      // );
      readPost2(
        id,
        home_guest,
        playtime,
        playdate,
        nameyard,
        address,
        levelwant,
        category,
        note,
        football_id,
        obj1.fullname,
        obj1.id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readPost2(
  id,
  home_guest,
  playtime,
  playdate,
  nameyard,
  address,
  levelwant,
  category,
  note,
  football_id,
  fullname,
  user_id
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

      readPost3(
        id,
        home_guest,
        playtime,
        playdate,
        nameyard,
        address,
        levelwant,
        category,
        note,
        football_id,
        fullname,
        user_id,
        obj2.name
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readPost3(
  id,
  home_guest,
  playtime,
  playdate,
  nameyard,
  address,
  levelwant,
  category,
  note,
  football_id,
  fullname,
  user_id,
  nameFc
) {
  document.getElementById("listPost").innerHTML +=
    '<div class="row">' +
    '    <div class="col-md-5">' +
    '       <div class="feature-img">' +
    '          <img src="images/posttimdoi.jpg" class="img-responsive" alt="#" />' +
    "       </div>" +
    "    </div>" +
    '    <div class="col-md-7">' +
    '       <div class="feature-cont">' +
    '          <div class="post-heading">' +
    "" +
    '             <div class="row">' +
    '                <div class="col-md-12 right-item-san right-item-doi">' +
    '                   <div class="header-item-doi header-tim-doi ">' +
    '                      <div class="match-header-texts">' +
    "                         <h2>" +
    '                            <a href="profileteamfootball.html?football_id=' +
    football_id +
    "&user_id=" +
    user_id +
    '" title="Tên Đội Bóng">' +
    "                               " +
    nameFc +
    "</a>" +
    '                            <span class="match-taginfo">' +
    '                               <i class="fa fa-tag" aria-hidden="true"></i> ' +
    home_guest +
    "" +
    "                            </span>" +
    "                         </h2>" +
    '                         <p class="captain-item noborder" owner-id="8082">' +
    '                            <a href="profile.html?user_id=' +
    user_id +
    '"><i class="fa fa-user"' +
    '                                  aria-hidden="true"></i>' +
    "                               " +
    fullname +
    "</a>" +
    '                            <span class="captain-item-status hide online"></span>' +
    '                            <span class="chat-nhanh" ng-click="onQuickChat(8082);"' +
    '                               title="Click để chat nhanh với đối."><i class="fa fa-comments"' +
    '                                  aria-hidden="true"></i>Nói chuyện</span>' +
    "                         </p>" +
    "                      </div>" +
    '                      <div class="btn-doi-top pull-right">' +
    '                         <button id="btnBatDoi"' +
    '                           onclick="myFunction(' +
    id +
    ')" class="btn btn-sm btn-primary pull-right btn-batdoi modal-link-angularjs"' +
    '                            data-modal-tpl="match.recipientMaker" login-required="true"' +
    '                            data-modal-qs="toTeamId=23325&amp;toUserId=8082&amp;toMatchId=98988&amp;matchId=98988&amp;teamId=23325&amp;toTeamName=FC Viễn Đông">' +
    '                            <i class="fa fa-send" aria-hidden="true"></i> Bắt đối' +
    "                         </button>" +
    "                      </div>" +
    "                   </div>" +
    '                   <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
    '                         aria-hidden="true"></i><strong>Thời gian:</strong>' +
    playtime +
    "" +
    "                      " +
    playdate +
    "</p>" +
    '                   <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
    '                         aria-hidden="true"></i><strong>Sân nhà:</strong><a' +
    '                         href="/san-bong-da-ho-den-lu-1.html" target="_blank">' +
    nameyard +
    "" +
    "                         </a>" +
    "                   </p>" +
    '                   <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
    '                         aria-hidden="true"></i><strong>Địa chỉ:</strong>' +
    address +
    "" +
    '                   <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
    '                         aria-hidden="true"></i><strong>Trình' +
    "                         độ:</strong>" +
    levelwant +
    "" +
    "                   </p>" +
    '                   <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
    '                         aria-hidden="true"></i><strong>Kèo:</strong>' +
    "                      " +
    category +
    "" +
    "                   </p>" +
    '                   <p class="item-stadium-address"><i class="fa fa-shirtsinbulk"' +
    '                         aria-hidden="true"></i><strong>Trạng' +
    "                         thái:</strong>" +
    '                      <span class="red">Đang chờ</span>' +
    "                   </p>" +
    '                   <p class="quost-doi">' +
    "                      " +
    note +
    "" +
    "                   </p>" +
    "                </div>" +
    "             </div>" +
    "          </div>" +
    "       </div>" +
    "    </div>" +
    "    </div>";
}
function myFunction(id) {
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn bắt đối với đội bóng này chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/requestMatch/create/" + id,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function (result) {
          swal(
            "Bắt đối thành công!",
            "Hệ thống đã gửi yêu cầu bắt đối của bạn đến chủ đội bóng!",
            "success"
          );
        },
        error: function () {
          swal("Bắt đối thất bại!", "Xin hãy thử lại sau!", "error");
        },
      });
    }
  );
}

function readTTp() {
  $.ajax({
    type: "GET",
    url: HOST + "/football/province",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      console.log("sss" + result);
      for (var key in result) {
        var obj = result[key];
        LocTinh(obj.name, obj.code);
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
    url: HOST + "/football/district/" + value,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      for (var key in result) {
        var obj = result[key];
        console.log(obj);
        LocQH(obj.name, obj.code);
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

function readTimeAction() {
  $.ajax({
    type: "GET",
    url: HOST + "/football/postMatchTeam/actionTime",
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
function searchPost1() {
  document.getElementById("listPost").innerHTML = "";
  var tinh = $("#selTinh").children("option:selected").text();
  var qh = $("#selQH").children("option:selected").text();
  if (!qh) {
    console.log("dmmm");
  } else {
    $.ajax({
      type: "GET",
      url: HOST + "/football/postMatchTeam/" + tinh + "/" + qh,
      dataType: "JSON",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (result) {
        for (var key in result) {
          var obj = result[key];
          console.log(obj);
          readPost(
            obj.id,
            obj.home_guest,
            obj.playtime,
            obj.playdate,
            obj.nameyard,
            obj.address,
            obj.levelwant,
            obj.category,
            obj.note,
            obj.football_id
          );
        }
      },
      error: function () {
        console.log("da co loi");
      },
    });
  }
}

function AllPost() {
  console.log("cayyyyyyyyyyyy");
  document.getElementById("listPost").innerHTML = "";
  getAllPost();
}

function searchPost2() {
  document.getElementById("listPost").innerHTML = "";
  var actionTime = $("#selHour").children("option:selected").text();
  var level = $("#selTd").children("option:selected").text();
  if (!level || !actionTime) {
  } else {
    $.ajax({
      type: "GET",
      url:
        HOST +
        "/football/postMatchTeam/getByActionTimeAndLevel/" +
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
          readPost(
            obj.id,
            obj.home_guest,
            obj.playtime,
            obj.playdate,
            obj.nameyard,
            obj.address,
            obj.levelwant,
            obj.category,
            obj.note,
            obj.football_id
          );
        }
      },
      error: function () {
        console.log("da co loi");
      },
    });
  }
}
