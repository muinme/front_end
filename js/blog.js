// Get the modal
const HOST = "http://localhost:8080";
$(document).ready(function () {
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
        createPost(
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
      //   window.location.replace("http://localhost:5500/index_user.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function createPost(
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
      createPost2(
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
      //create div san bong
      //create div san bong
      //   window.location.replace("http://localhost:5500/index_user.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function createPost2(
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
      // console.log("sss" + result2);
      var obj2 = result2;
      // console.log("object= " + JSON.stringify(obj2) + "\nid = " + obj2.name);
      createPost3(
        home_guest,
        playtime,
        playdate,
        nameyard,
        address,
        levelwant,
        category,
        note,
        fullname,
        user_id,
        obj2.name
      );
      //create div san bong
      //create div san bong
      //   window.location.replace("http://localhost:5500/index_user.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function createPost3(
  home_guest,
  playtime,
  playdate,
  nameyard,
  address,
  levelwant,
  category,
  note,
  fullname,
  user_id,
  nameFc
) {
  document.getElementById("listPost").innerHTML +=
    '    <div class="col-md-5">' +
    '       <div class="feature-img">' +
    '          <img src="images/post2.png" class="img-responsive" alt="#" />' +
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
    '                            <a href="/fc-vien-dong.html?matchId=98988" title="FC Viễn Đông">' +
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
    '                            <a href="thongtincanhankhac.html?user_id=' +
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
    '                            class="btn btn-sm btn-primary pull-right btn-batdoi modal-link-angularjs"' +
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
    "    </div>";
}
