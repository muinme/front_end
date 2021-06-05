document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/football/requestPitch/Username",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log(result);
      for (var key in result) {
        var obj = result[key];
        console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.id);
        readUser2(
          obj.user_id,
          obj.id,
          obj.pitch_id,
          obj.created,
          obj.pitch_detail_id
        );
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readUser2(user_id, id, pitch_id, created, pitch_detail_id) {
  console.log("íidj" + user_id);
  console.log("sss" + created);
  console.log("sds" + pitch_detail_id);
  $.ajax({
    type: "GET",
    url: HOST + "/football/userById/" + user_id,
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
      console.log("ok chua" + obj.fullname);
      readPost(
        obj.fullname,
        obj.phone,
        obj.email,
        id,
        pitch_id,
        created,
        pitch_detail_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readPost(
  fullname,
  phone,
  email,
  id,
  pitch_id,
  created,
  pitch_detail_id
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/detailPitch/" + pitch_detail_id,
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
      console.log(obj);
      readTime(
        fullname,
        phone,
        email,
        id,
        pitch_id,
        created,
        pitch_detail_id,
        obj.timeslot_id,
        obj.day_id,
        obj.number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readYeuCauFinal(
  fullname,
  phone,
  email,
  id,
  namePitch,
  created,
  pitch_detail_id,
  time,
  day,
  number_pitch_id
) {
  document.getElementById("tbYeuCau").innerHTML +=
    '<tr id="yc' +
    id +
    '" class="ng-scope" style="text-align: left;">' +
    '    <td class="ng-binding"> Sân số ' +
    number_pitch_id +
    "</td>" +
    "    <td>" +
    '    <span class="ng-scope">' +
    namePitch +
    "</span><!-- end ngIf: stadium.TypeId==1 -->" +
    "    </td>" +
    "    <td>" +
    '        <a href="#/stadium-info/1362"><strong class="ng-binding">' +
    fullname +
    "</strong></a>" +
    '    <div class="ng-scope">' +
    '            <i class="fa fa-phone-square"></i> <a href="tel:0333157596" class="ng-binding">' +
    phone +
    "</a>" +
    "        </div>" +
    '        <div class="ng-scope">' +
    '            <i class="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:phamanhtu242@gmail.com" target="_top" class="ng-binding">' +
    email +
    "</a>" +
    "        </div>" +
    "    </td>" +
    "    <td>" +
    '        <span class="ng-scope">' +
    time +
    "</span>" +
    "        </td>" +
    "        <td>" +
    '            <span class="ng-scope">' +
    day +
    "</span><!-- end ngIf: stadium.TypeId==1 -->" +
    "        </td>" +
    '    <td align="right" style="text-align:right">' +
    '        <div class="form-group">' +
    '            <a id ="ChapNhan" onclick="myFunction1(' +
    id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-check-o"></i>Chấp Nhận</a>' +
    "        </div>" +
    '        <div class="form-group">' +
    '            <a id ="TuChoi" onclick="myFunction2(' +
    id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-times-o"></i>Từ Chối</a>' +
    "        </div>" +
    "    </td>" +
    "</tr>";
}
function myFunction1(id) {
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn chấp nhận yêu cầu đặt sân này chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/historyRental1/create/" + id,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function () {
          deleteRow("tbYeuCau", "yc" + id + "");
          swal(
            "Chấp nhận yêu cầu đặt sân thành công!",
            "Hệ thống đã lưu lại quá trình chấp nhận của bạn!",
            "success"
          );
        },
        error: function () {
          swal(
            "Chấp nhận yêu cầu đặt sân thất bại!",
            "Xin hãy thử lại sau!",
            "error"
          );
        },
      });
    }
  );
}

function myFunction2(id) {
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn từ chối yêu cầu đặt sân này chứ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/historyRental2/create/" + id,

        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function (result) {
          deleteRow("tbYeuCau", "yc" + id + "");
          swal(
            "Từ chối yêu cầu đặt sân thành công!",
            "Hệ thống đã lưu lại quá trình từ chối của bạn!",
            "success"
          );
        },
        error: function () {
          swal(
            "Từ chối yêu cầu đặt sân thất bại!",
            "Xin hãy thử lại sau!",
            "error"
          );
        },
      });
    }
  );
}

function readTime(
  fullname,
  phone,
  email,
  id,
  pitch_id,
  created,
  pitch_detail_id,
  timeslot_id,
  day_id,
  number_pitch_id
) {
  console.log("dmmmmmmmm callllllllll" + timeslot_id);
  $.ajax({
    type: "GET",
    url: HOST + "/football/timeSlotPitch/" + timeslot_id,
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
      readDay(
        fullname,
        phone,
        email,
        id,
        pitch_id,
        created,
        pitch_detail_id,
        obj.timeslot_detail,
        day_id,
        number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readDay(
  fullname,
  phone,
  email,
  id,
  pitch_id,
  created,
  pitch_detail_id,
  time,
  day_id,
  number_pitch_id
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/dayOfWeek/" + day_id,
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
      readPitch(
        fullname,
        phone,
        email,
        id,
        pitch_id,
        created,
        pitch_detail_id,
        time,
        obj.name,
        number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readPitch(
  fullname,
  phone,
  email,
  id,
  pitch_id,
  created,
  pitch_detail_id,
  time,
  day,
  number_pitch_id
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/pitch/" + pitch_id,
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
      readYeuCauFinal(
        fullname,
        phone,
        email,
        id,
        obj.name,
        created,
        pitch_detail_id,
        time,
        day,
        number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function deleteRow(tbodyid, rowid) {
  document.getElementById(tbodyid).removeChild(document.getElementById(rowid));
}
