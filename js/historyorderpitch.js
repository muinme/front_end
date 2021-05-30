$(document).ready(function () {
  console.log("vll");
  $.ajax({
    type: "GET",
    url: HOST + "/football/historyRental/getListByUserName",
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
        console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.id);
        readNamePitch(obj.id, obj.status, obj.request_pitch_id);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readNamePitch(id, status, request_pitch_id) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/pitch/getNamePitch/" + request_pitch_id,
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
      readDetailPitch(id, status, request_pitch_id, obj.name);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readDetailPitch(id, status, request_pitch_id, name) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/detail_pitch/getInfo/" + request_pitch_id,
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
        id,
        status,
        name,
        obj.timeslot_id,
        obj.day_id,
        obj.price_id,
        obj.number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readTime(
  id,
  status,
  name,
  timeslot_id,
  day_id,
  price_id,
  number_pitch_id
) {
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
      console.log(obj);
      readThu(
        id,
        status,
        name,
        obj.timeslot_detail,
        day_id,
        price_id,
        number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readThu(
  id,
  status,
  name,
  timeslot_detail,
  day_id,
  price_id,
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
      console.log(obj);
      readPrice(
        id,
        status,
        name,
        timeslot_detail,
        obj.name,
        price_id,
        number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readPrice(
  id,
  status,
  name,
  timeslot_detail,
  date,
  price_id,
  number_pitch_id
) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/price/" + price_id,
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
      readListHistoryPitch(
        id,
        status,
        name,
        timeslot_detail,
        date,
        obj.price,
        number_pitch_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readListHistoryPitch(
  id,
  status,
  name,
  timeslot_detail,
  date,
  price,
  number_pitch_id
) {
  if (status == "0") {
    document.getElementById("listHOPitch").innerHTML +=
      "<tr>" +
      "    <th>" +
      id +
      "</th>" +
      '<th><a href="profile.html?user_id=' +
      id +
      '">' +
      name +
      "</a></th>" +
      "    <th>Sân số " +
      number_pitch_id +
      "</th>" +
      "    <th>" +
      timeslot_detail +
      "</th>" +
      "    <th>" +
      date +
      "</th>" +
      "    <th>" +
      price +
      "</th>" +
      "    <th>" +
      "</th>" +
      '<th><a class="fa fa-close"></a></th>' +
      "</tr>";
  }
  if (status == "1") {
    document.getElementById("listHOPitch").innerHTML +=
      "<tr>" +
      "    <th>" +
      id +
      "</th>" +
      '<th><a href="profile.html?user_id=' +
      id +
      '">' +
      name +
      "</a></th>" +
      "    <th>Sân số " +
      number_pitch_id +
      "</th>" +
      "    <th>" +
      timeslot_detail +
      "</th>" +
      "    <th>" +
      date +
      "</th>" +
      "    <th>" +
      price +
      "</th>" +
      "    <th>" +
      '<a class="fa fa-check"></a></th>';
    "</th>" + "    <th>" + "</th>" + "</tr>";
  }
}
