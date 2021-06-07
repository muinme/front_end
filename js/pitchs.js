// Get the modal
document.write('<script type="text/javascript" src="/js/host.js" ></script>');
$(document).ready(function () {
  console.log("login button is pressed");
  getAllPitch();
  readTTp();
});

function getAllPitch() {
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
        createSanBong(obj.name, obj.image, obj.id, obj.address);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function createSanBong(name, image, id, address) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/userByPitchId/" + id,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result2) {
      console.log("sss" + result2);
      var obj1 = result2;
      console.log(
        "object= " + JSON.stringify(obj1) + "\nid = " + obj1.fullname
      );
      createSanBong2(
        name,
        image,
        id,
        address,
        obj1.fullname,
        obj1.phone,
        obj1.image,
        obj1.id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function createSanBong2(
  name,
  image,
  id,
  address,
  fullname,
  phone,
  avatar,
  user_id
) {
  document.getElementById("list_sanbong").innerHTML +=
    '<div class="feature-img">' +
    '    <img src="/images/pitchs.jpg" class="img-responsive" alt="#" />' +
    " </div>" +
    '<div class= "feature-cont ">' +
    '    <div class= "post-people ">' +
    '       <div class= "left-profile ">' +
    '          <div class= "post-info ">' +
    '             <img src= "' +
    avatar +
    '" alt= "# " />' +
    "             <span>" +
    "                <h4><a href=profile.html?user_id=" +
    user_id +
    "" +
    '                      title= "Sân bóng Hải Đăng - 56 Tố Hữu ">' +
    fullname +
    "</h4>" +
    "                <h5></h5>" +
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
    '                   <i class= "fa fa-map-o " aria-hidden= "true "></i>' +
    address +
    "" +
    "                </p>" +
    '                <p class= "phone-numb "><i class= "fa fa-phone-square " aria-hidden= "true "></i> Liên Hệ -' +
    phone +
    "" +
    "                   " +
    // phone +
    "</p>" +
    "             </div>" +
    "          </div>" +
    "       </li>" +
    '       <div class= "full ">' +
    '          <a class= "btn " href= "chitietsanbong.html?pitch_id=' +
    id +
    ' ">Xem Chi Tiết</a>' +
    "       </div>" +
    "    </div>" +
    " </div>";
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

function AllPitch() {
  console.log("dmmmm");
  document.getElementById("list_sanbong").innerHTML = "";
  getAllPitch();
}

function searchPitch1() {
  console.log("cayyyyyyyyyyyyy");
  document.getElementById("list_sanbong").innerHTML = "";
  var tinh = $("#selTinh").children("option:selected").text();
  var qh = $("#selQH").children("option:selected").text();
  if (!qh) {
    console.log("dmmm");
  } else {
    $.ajax({
      type: "GET",
      url: HOST + "/football/pitch/" + tinh + "/" + qh,
      dataType: "JSON",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (result) {
        for (var key in result) {
          var obj = result[key];
          createSanBong(obj.name, obj.image, obj.id, obj.address);
        }
      },
      error: function () {
        console.log("da co loi");
      },
    });
  }
}
