document.write('<script type="text/javascript" src="/js/host.js" ></script>');
$(document).ready(function () {
  console.log("cayyyyyyyyyyyyyyyyyyyy");
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
      readDanhMuc(obj.fullname, obj.image);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readDanhMuc(fullname, image) {
  document.getElementById("DanhMuc").innerHTML =
    '<div class="img-doio"><img class="img-responsive" src="' +
    image +
    '" align="thumb"></div>' +
    '            <div class="title-doi">' +
    '               <h1 style="text-align: left;"><span class="gender"></span></h1>' +
    '               <p class="captain-item" owner-id="7054">' +
    '                  <span style="color: #ffffff;font-size: 15px !important;">' +
    '                     <a href="/user/profile/7054" style="color: #ffffff;font-size: 18px !important;color: #ffffff;">' +
    fullname +
    "" +
    "                        </a> (đội trưởng)" +
    '                     <span class="captain-item-status offline"></span>' +
    "                  </span>" +
    '                  <span class="chat-nhanh chat-nhanh-offline" ng-click="onQuickChat(7054);"' +
    '                     title="Click để chat nhanh với đối."><i class="fa fa-comments" aria-hidden="true"></i> Nói' +
    "                     chuyện</span>" +
    "               </p>" +
    "            </div>" +
    '            <div class="wrap-ul-doi">' +
    '               <ul class="list-link-doi">' +
    '                  <li class="active"><a>Tìm đối</a></li>' +
    "                  <li ><a a href='myteam.html'>Yêu cầu bắt đối</a></li>" +
    '                  <li><a">Giới thiệu</a></li>' +
    '                  <li><a">Quỹ bóng</a></li>' +
    "                  <li>" +
    '                     <a href="managemyteam.html">' +
    '                        <i class="fa fa-gear"></i> Quản lý đội bóng' +
    "                     </a>" +
    "                  </li>" +
    "               </ul>" +
    "            </div>";
}
