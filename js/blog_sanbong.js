// Get the modal
const HOST = "http://localhost:8080";
$(document).ready(function () {
  console.log("login button is pressed");
  $.ajax({
    type: "GET",
    url: HOST + "/football/pitch/getAll",
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
        console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.id);
        //create div san bong
        createSanBong(obj.name, obj.image, obj.id);
      }
      //   window.location.replace("http://localhost:5500/index_user.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function createSanBong(name, image, id) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/userByPitchId/" + id,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result2) {
      console.log("sss" + result2);
      var obj1 = result2;
      console.log(
        "object= " + JSON.stringify(obj1) + "\nid = " + obj1.fullname
      );
      createSanBong2(name, image, obj1.fullname, obj1.phone);
      //create div san bong
      //create div san bong
      //   window.location.replace("http://localhost:5500/index_user.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function createSanBong2(name, image, fullname, phone) {
  document.getElementById("list_sanbong").innerHTML +=
    '<div class="feature-img">' +
    '    <img src="images/img-03_002.jpg" class="img-responsive" alt="#" />' +
    " </div>" +
    '<div class= "feature-cont ">' +
    '    <div class= "post-people ">' +
    '       <div class= "left-profile ">' +
    '          <div class= "post-info ">' +
    '             <img src= "' +
    image +
    '" alt= "# " />' +
    "             <span>" +
    "                <h4>" +
    fullname +
    "</h4>" +
    "                <h5>on March27, 2021</h5>" +
    "             </span>" +
    "          </div>" +
    '          <span class= "share "></span>' +
    "       </div>" +
    "    </div>" +
    '    <div class= "post-heading ">' +
    '       <li class= "item-card ">' +
    '          <div class= "row ">' +
    '             <div class= "col-md-7 right-item-san ">' +
    '                <h2><a href= "/san-bong-hai-dang-56-to-huu.html "' +
    '                      title= "Sân bóng Hải Đăng - 56 Tố Hữu ">' +
    name +
    "</a></h2>" +
    "                <p>" +
    '                   <i class= "fa fa-map-o " aria-hidden= "true "></i> 56 Tố Hữu (Quận Nam Từ Liêm, Hà Nội)' +
    "                </p>" +
    '                <p class= "phone-numb "><i class= "fa fa-phone-square " aria-hidden= "true "></i> Liên Hệ -' +
    "                   " +
    phone +
    "</p>" +
    "             </div>" +
    "          </div>" +
    "       </li>" +
    '       <div class= "full ">' +
    '          <a class= "btn " href= "# ">Xem Chi Tiết</a>' +
    "       </div>" +
    "    </div>" +
    " </div>";
}
