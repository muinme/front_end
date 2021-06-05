document.write('<script type="text/javascript" src="/js/host.js" ></script>');
$(document).ready(function () {
  var id = GetURLParameter("pitch_id");

  $.ajax({
    type: "GET",
    url: HOST + "/football/pitch/" + id,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      var obj = result;
      // console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.name);
      readThongTinSanBong(
        obj.name,
        obj.address,
        obj.introduce,
        obj.googlemap,
        obj.phone,
        obj.email,
        obj.facebook
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
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
function readThongTinSanBong(
  name,
  address,
  introduce,
  googlemap,
  phone,
  phone,
  email,
  facebook
) {
  document.getElementById("nameSan").innerHTML +=
    '<div class="col-md-12">' +
    '    <h1 class="title-sans">' +
    name +
    "</h1>" +
    "</div>";
  document.getElementById("nameSan").innerHTML +=
    '<i class="fa fa-map-o" aria-hidden="true"></i>' +
    address +
    "" +
    '<a href="' +
    googlemap +
    '"><i class="fa fa-crosshairs" aria-hidden="true">Google map</i></a>';
}

function readSanTrong(number_pitch_id, price, pitch_detail_id) {
  console.log("docHTML SAN T");
  // var myobj = document.getElementById("listSan");
  // myobj.remove();
  document.getElementById("listSan").innerHTML +=
    '<div class="san-price-line calendar-row" style="' +
    "text-align: left;" +
    '">' +
    "    Sân số " +
    number_pitch_id +
    "" +
    "    <div>" +
    '        <span class="price-san">' +
    price +
    "<sup>vnđ</sup></span>" +
    '        <button id="DatSan" onclick="myFunction(' +
    pitch_detail_id +
    ')" class="check-san">' +
    '            <i class="fa fa-calendar-check-o"' +
    '                aria-hidden="true"></i> Đặt sân' +
    "        </button>" +
    "    </div>" +
    "" +
    "" +
    '    <div class="stadium-calendar">' +
    '        <div class="stadium-container">' +
    "        </div>" +
    "    </div>" +
    "    " +
    "</div>";
}
$("#btnTimKiem").click(function () {
  var id = GetURLParameter("pitch_id");
  var thu = $("#thu7ng").val();
  var gio = $("#gio7ng").val();
  var myobj = document.getElementById("listSan");
  myobj.innerHTML = "";
  console.log(thu + "=thuvagio=" + gio + "id " + id);
  console.log("vclll");
  $.ajax({
    type: "GET",
    url: HOST + "/football/detail_pitch/" + id + "/" + gio + "/" + thu + "",
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
        readSanTrong2(obj.number_pitch_id, obj.price_id, obj.id);
      }
      console.log("thanh cong");
    },
    error: function () {
      console.log("da co loi o tim kiem");
    },
  });
});

function readSanTrong2(number_pitch_id, price_id, pitch_detail_id) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/price/" + price_id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var obj = result;
      console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.id);
      readSanTrong(number_pitch_id, obj.price, pitch_detail_id);
      console.log("thanh cong");
    },
    error: function () {
      console.log("da co loi o tim kiem");
    },
  });
}

function myFunction(pitch_detail_id) {
  var id = GetURLParameter("pitch_id");
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn đặt sân bóng này chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url:
          HOST + "/football/requestPitch/create/" + id + "/" + pitch_detail_id,

        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function (result) {
          swal(
            "Đặt sân bóng thành công!",
            "Hệ thống đã gửi yêu cầu đặt sân của bạn đến chủ sân!",
            "success"
          );
        },
        error: function () {
          swal("Đặt sân bóng thất bại!", "Xin hãy thử lại sau!", "error");
        },
      });
    }
  );
}
