document.write('<script type="text/javascript" src="/js/host.js" ></script>');
$(document).ready(function () {
  readSlPitch();
  getStatusHire(1);
});

function getStatusHire(number_pitch_id) {
  var pitch_id = GetURLParameter("pitch_id");
  $.ajax({
    type: "GET",
    url:
      HOST +
      "/football/detailPitch/getStatusHire/" +
      pitch_id +
      "/" +
      number_pitch_id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("thanh cong" + result[7]);
      for (var i = 0; i <= 9; i++) {
        readStatuPitch(
          i,
          result[7 * i + 0],
          result[7 * i + 1],
          result[7 * i + 2],
          result[7 * i + 3],
          result[7 * i + 4],
          result[7 * i + 5],
          result[7 * i + 6]
        );
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readStatuPitch(
  i,
  status0,
  status1,
  status2,
  status3,
  status4,
  status5,
  status6
) {
  console.log(
    "dmmmmmmmmmmm" +
      i +
      " " +
      status0 +
      " " +
      status1 +
      " " +
      status2 +
      " " +
      status3 +
      " " +
      status4 +
      " " +
      status5 +
      " " +
      status6
  );

  var cell0;
  var cell1;
  var cell2;
  var cell3;
  var cell4;
  var cell5;
  var cell6;
  var cell7;

  switch (i) {
    case 0:
      cell0 = '<td align="center">8h-9h30</td>';
      break;
    case 1:
      cell0 = '<td align="center">10h-11h30</td>';
      break;
    case 2:
      cell0 = '<td align="center">11h30-13h</td>';
      break;
    case 3:
      cell0 = '<td align="center">13h-14h30</td>';
      break;
    case 4:
      cell0 = '<td align="center">14h30-16h</td>';
      break;
    case 5:
      cell0 = '<td align="center">16h-17h30</td>';
      break;
    case 6:
      cell0 = '<td align="center">17h30-19h</td>';
      break;
    case 7:
      cell0 = '<td align="center">19h-20h30</td>';
      break;
    case 8:
      cell0 = '<td align="center">20h30-22h</td>';
      break;
    default:
      cell0 = '<td align="center">22h-23h30</td>';
  }

  if (status0 == "0") {
    cell1 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status" style="background-color: #40e2d7">' +
      '    <option value="1">Đã Thuê</option>' +
      '    <option value="0" selected="selected">Chưa Thuê</option>' +
      "  </select>" +
      "</td>";
  } else {
    cell1 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status" style="' +
      "    background-color: #40e2d7;" +
      '">' +
      '        <option value="1" selected="selected">Đã Thuê</option>' +
      '        <option value="0">Chưa Thuê</option>' +
      "      </select>" +
      "</td>";
  }
  if (status1 == "0") {
    cell2 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status1" style="background-color: #40e2d7">' +
      '    <option value="1">Đã Thuê</option>' +
      '    <option value="0" selected="selected">Chưa Thuê</option>' +
      "  </select>" +
      "</td>";
  } else {
    cell2 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status1" style="' +
      "    background-color: #40e2d7;" +
      '">' +
      '        <option value="1" selected="selected">Đã Thuê</option>' +
      '        <option value="0">Chưa Thuê</option>' +
      "      </select>" +
      "</td>";
  }
  if (status2 == "0") {
    cell3 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status2" style="background-color: #40e2d7">' +
      '    <option value="1">Đã Thuê</option>' +
      '    <option value="0" selected="selected">Chưa Thuê</option>' +
      "  </select>" +
      "</td>";
  } else {
    cell3 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status2" style="' +
      "    background-color: #40e2d7;" +
      '">' +
      '        <option value="1" selected="selected">Đã Thuê</option>' +
      '        <option value="0">Chưa Thuê</option>' +
      "      </select>" +
      "</td>";
  }
  if (status3 == "0") {
    cell4 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status3" style="background-color: #40e2d7">' +
      '    <option value="1">Đã Thuê</option>' +
      '    <option value="0" selected="selected">Chưa Thuê</option>' +
      "  </select>" +
      "</td>";
  } else {
    cell4 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status3" style="' +
      "    background-color: #40e2d7;" +
      '">' +
      '        <option value="1" selected="selected">Đã Thuê</option>' +
      '        <option value="0">Chưa Thuê</option>' +
      "      </select>" +
      "</td>";
  }
  if (status4 == "0") {
    cell5 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status4" style="background-color: #40e2d7">' +
      '    <option value="1">Đã Thuê</option>' +
      '    <option value="0" selected="selected">Chưa Thuê</option>' +
      "  </select>" +
      "</td>";
  } else {
    cell5 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status4" style="' +
      "    background-color: #40e2d7;" +
      '">' +
      '        <option value="1" selected="selected">Đã Thuê</option>' +
      '        <option value="0">Chưa Thuê</option>' +
      "      </select>" +
      "</td>";
  }
  if (status5 == "0") {
    cell6 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status5" style="background-color: #40e2d7">' +
      '    <option value="1">Đã Thuê</option>' +
      '    <option value="0" selected="selected">Chưa Thuê</option>' +
      "  </select>" +
      "</td>";
  } else {
    cell6 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status5" style="' +
      "    background-color: #40e2d7;" +
      '">' +
      '        <option value="1" selected="selected">Đã Thuê</option>' +
      '        <option value="0">Chưa Thuê</option>' +
      "      </select>" +
      "</td>";
  }
  if (status6 == "0") {
    cell7 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status6" style="background-color: #40e2d7">' +
      '    <option value="1">Đã Thuê</option>' +
      '    <option value="0" selected="selected">Chưa Thuê</option>' +
      "  </select>" +
      "</td>";
  } else {
    cell7 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status6" style="' +
      "    background-color: #40e2d7;" +
      '">' +
      '        <option value="1" selected="selected">Đã Thuê</option>' +
      '        <option value="0">Chưa Thuê</option>' +
      "      </select>" +
      "</td>";
  }
  $("#myTable tr:last").after(
    '<tr class="trOK">' +
      cell0 +
      cell1 +
      cell2 +
      cell3 +
      cell4 +
      cell5 +
      cell6 +
      cell7 +
      "</tr>"
  );
}
function myFucntionLuuStatus(number_pitch_id) {
  readStatus(number_pitch_id);
}

function readStatus(number_pitch_id) {
  console.log("click luu");
  var timeslot_id = 1;
  var day_id = 1;
  $("#myTable .trOK").each(function () {
    console.log(timeslot_id);
    var selectedOptionVal = $(this).find(".cellStatus").find("#status").val(); //selected option value
    updateStatusOfTime(
      1,
      timeslot_id,
      day_id,
      number_pitch_id,
      selectedOptionVal
    );
    var selectedOptionVal1 = $(this).find(".cellStatus").find("#status1").val(); //selected option value
    updateStatusOfTime(
      1,
      timeslot_id,
      day_id + 1,
      number_pitch_id,
      selectedOptionVal1
    );
    var selectedOptionVal2 = $(this).find(".cellStatus").find("#status2").val(); //selected option value
    updateStatusOfTime(
      1,
      timeslot_id,
      day_id + 2,
      number_pitch_id,
      selectedOptionVal2
    );
    var selectedOptionVal3 = $(this).find(".cellStatus").find("#status3").val(); //selected option value
    updateStatusOfTime(
      1,
      timeslot_id,
      day_id + 3,
      number_pitch_id,
      selectedOptionVal3
    );
    var selectedOptionVal4 = $(this).find(".cellStatus").find("#status4").val(); //selected option value
    updateStatusOfTime(
      1,
      timeslot_id,
      day_id + 4,
      number_pitch_id,
      selectedOptionVal4
    );
    var selectedOptionVal5 = $(this).find(".cellStatus").find("#status5").val(); //selected option value
    updateStatusOfTime(
      1,
      timeslot_id,
      day_id + 5,
      number_pitch_id,
      selectedOptionVal5
    );
    var selectedOptionVal6 = $(this).find(".cellStatus").find("#status6").val(); //selected option value
    updateStatusOfTime(
      1,
      timeslot_id,
      day_id + 6,
      number_pitch_id,
      selectedOptionVal6
    );
    console.log(selectedOptionVal);
    console.log(selectedOptionVal1);
    console.log(selectedOptionVal2);
    console.log(selectedOptionVal3);
    console.log(selectedOptionVal4);
    console.log(selectedOptionVal5);
    console.log(selectedOptionVal6);
    timeslot_id = timeslot_id + 1;
  });
}

function updateStatusOfTime(
  pitch_id,
  timeslot_id,
  day_id,
  number_pitch_id,
  status_hire
) {
  $.ajax({
    type: "POST",
    url:
      HOST +
      "/football/detail_pitch/updateStatus/1/" +
      timeslot_id +
      "/" +
      day_id +
      "/" +
      number_pitch_id +
      "/" +
      status_hire,
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

function readSlPitch() {
  var pitch_id = GetURLParameter("pitch_id");
  $.ajax({
    type: "GET",
    url: HOST + "/football/detail_pitch/getSLPitch/" + pitch_id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("slsan" + result);
      readListNumberPitch(result);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

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

function readListNumberPitch(m) {
  for (var i = 1; i <= m; i++) {
    document.getElementById("listSlPitch").innerHTML +=
      '<li><a class="btn"onclick="myFunction(' +
      i +
      ')">Sân ' +
      i +
      "</a></li>";
  }
}

function myFunction(number_pitch_id) {
  console.log("myFunction: " + number_pitch_id);
  document.getElementById("updatePitch").innerHTML = "";
  document.getElementById("updatePitch").innerHTML +=
    '<h1 align = center style="color: #43a047;">Cập nhật chi tiết sân bóng</h1>' +
    "                               " +
    '<table id="myTable" border= 2 style="margin: 0 auto;"> ' +
    '    <tr style="background-color: #43a047; color: rgb(255, 255, 255);">' +
    '        <th align="center">Status</th>' +
    "        <th width = 100>Thứ 2</th>" +
    "        <th width = 100>Thứ 3</th>" +
    "        <th width = 100>Thứ 4</th>" +
    "        <th width = 100>Thứ 5</th>" +
    "        <th width = 100>Thứ 6</th>" +
    "        <th width = 100>Thứ 7</th>" +
    "        <th width = 100>Chủ Nhật</th>" +
    "    </tr>" +
    "    " +
    "</table>" +
    '<div class="form-group">' +
    '    <a href="#" id="LuuStatus" onclick="myFucntionLuuStatus(' +
    number_pitch_id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-spinner fa-spin"></i>Lưu Cập Nhật</a>' +
    "    <!-- fa fa-save -->" +
    "</div>";

  getStatusHire(number_pitch_id);
}
