document.write('<script type="text/javascript" src="/js/host.js" ></script>');
$(document).ready(function () {
  readSlPitch();
});

function getMoneyPitch(number_pitch_id) {
  var pitch_id = GetURLParameter("pitch_id");
  console.log("click luu pitch id" + pitch_id);
  $.ajax({
    type: "GET",
    url:
      HOST +
      "/football/detailPitch/getMoneyPitch/" +
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
        readMoneyPitch(
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
      if (result != "undefined") {
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
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readMoneyPitch(
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
  cell1 =
    '<td class="cellStatus">' +
    '<input class="form-control" id="money" style="font-weight: 700;" type="text" value="' +
    status0 +
    '">' +
    "</td>";

  cell2 =
    '<td class="cellStatus">' +
    '<input class="form-control" id="money1" style="font-weight: 700;" type="text" value="' +
    status1 +
    '">' +
    "</td>";

  cell3 =
    '<td class="cellStatus">' +
    '<input class="form-control" id="money2" style="font-weight: 700;" type="text" value="' +
    status2 +
    '">' +
    "</td>";

  cell4 =
    '<td class="cellStatus">' +
    '<input class="form-control" id="money3" style="font-weight: 700;" type="text" value="' +
    status3 +
    '">' +
    "</td>";

  cell5 =
    '<td class="cellStatus">' +
    '<input class="form-control" id="money4" style="font-weight: 700;" type="text" value="' +
    status4 +
    '">' +
    "</td>";

  cell6 =
    '<td class="cellStatus">' +
    '<input class="form-control" id="money5" style="font-weight: 700;" type="text" value="' +
    status5 +
    '">' +
    "</td>";

  cell7 =
    '<td class="cellStatus">' +
    '<input class="form-control" id="money6" style="font-weight: 700;" type="text" value="' +
    status6 +
    '">' +
    "</td>";

  $("#myTable2 tr:last").after(
    '<tr class="trOK2">' +
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
      '  <select name="cars" id="status" style="background-color: #40e2d7;width: -webkit-fill-available;">' +
      '    <option value="1">&#xf046;</i>' +
      '    <option value="0" selected="selected"></option>' +
      "  </select>" +
      "</td>";
  } else {
    cell1 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status" style="' +
      "    background-color: #40e2d7;width: -webkit-fill-available;" +
      '">' +
      '        <option value="1" selected="selected">&#xf046;</option>' +
      '        <option value="0"></option>' +
      "      </select>" +
      "</td>";
  }
  if (status1 == "0") {
    cell2 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status1" style="background-color: #40e2d7;width: -webkit-fill-available;">' +
      '    <option value="1">&#xf046;</option>' +
      '    <option value="0" selected="selected"></option>' +
      "  </select>" +
      "</td>";
  } else {
    cell2 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status1" style="' +
      "    background-color: #40e2d7;width: -webkit-fill-available;" +
      '">' +
      '        <option value="1" selected="selected">&#xf046;</option>' +
      '        <option value="0"></option>' +
      "      </select>" +
      "</td>";
  }
  if (status2 == "0") {
    cell3 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status2" style="background-color: #40e2d7;width: -webkit-fill-available;">' +
      '    <option value="1">&#xf046;</option>' +
      '    <option value="0" selected="selected"></option>' +
      "  </select>" +
      "</td>";
  } else {
    cell3 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status2" style="' +
      "    background-color: #40e2d7;width: -webkit-fill-available;" +
      '">' +
      '        <option value="1" selected="selected">&#xf046;</option>' +
      '        <option value="0"></option>' +
      "      </select>" +
      "</td>";
  }
  if (status3 == "0") {
    cell4 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status3" style="background-color: #40e2d7;width: -webkit-fill-available;">' +
      '    <option value="1">&#xf046;</option>' +
      '    <option value="0" selected="selected"></option>' +
      "  </select>" +
      "</td>";
  } else {
    cell4 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status3" style="' +
      "    background-color: #40e2d7;width: -webkit-fill-available;" +
      '">' +
      '        <option value="1" selected="selected">&#xf046;</option>' +
      '        <option value="0"></option>' +
      "      </select>" +
      "</td>";
  }
  if (status4 == "0") {
    cell5 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status4" style="background-color: #40e2d7;width: -webkit-fill-available;">' +
      '    <option value="1">&#xf046;</option>' +
      '    <option value="0" selected="selected"></option>' +
      "  </select>" +
      "</td>";
  } else {
    cell5 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status4" style="' +
      "    background-color: #40e2d7;width: -webkit-fill-available;" +
      '">' +
      '        <option value="1" selected="selected">&#xf046;</option>' +
      '        <option value="0"></option>' +
      "      </select>" +
      "</td>";
  }
  if (status5 == "0") {
    cell6 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status5" style="background-color: #40e2d7;width: -webkit-fill-available;">' +
      '    <option value="1">&#xf046;</option>' +
      '    <option value="0" selected="selected"></option>' +
      "  </select>" +
      "</td>";
  } else {
    cell6 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status5" style="' +
      "    background-color: #40e2d7;width: -webkit-fill-available;" +
      '">' +
      '        <option value="1" selected="selected">&#xf046;</option>' +
      '        <option value="0"></option>' +
      "      </select>" +
      "</td>";
  }
  if (status6 == "0") {
    cell7 =
      '<td class="cellStatus">' +
      '  <select name="cars" id="status6" style="background-color: #40e2d7;width: -webkit-fill-available;">' +
      '    <option value="1">&#xf046;</option>' +
      '    <option value="0" selected="selected"></option>' +
      "  </select>" +
      "</td>";
  } else {
    cell7 =
      '<td class="cellStatus">' +
      '    <select name="cars" id="status6" style="' +
      "    background-color: #40e2d7;width: -webkit-fill-available;" +
      '">' +
      '        <option value="1" selected="selected">&#xf046;</option>' +
      '        <option value="0"></option>' +
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
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn cập nhật trạng thái sân bóng với dữ liệu trên?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      readStatus(number_pitch_id);
      swal("Done!", "Cập nhật trạng thái sân bóng thành công!", "success");
    }
  );
}

function myFucntionLuuMoney(number_pitch_id) {
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn cập nhật giá tiền sân bóng với dữ liệu trên?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      readMoney(number_pitch_id);
      swal("Done!", "Cập nhật giá tiền sân bóng thành công!", "success");
    }
  );
}

function readMoney(number_pitch_id) {
  var pitch_id = GetURLParameter("pitch_id");
  console.log("click luu pitch id" + pitch_id);
  var timeslot_id = 1;
  var day_id = 1;
  $("#myTable2 .trOK2").each(function () {
    console.log(timeslot_id);
    var selectedOptionVal = $(this).find(".cellStatus").find("#money").val(); //selected option value
    updateMoney(
      pitch_id,
      timeslot_id,
      day_id,
      number_pitch_id,
      selectedOptionVal
    );
    var selectedOptionVal1 = $(this).find(".cellStatus").find("#money1").val(); //selected option value
    updateMoney(
      pitch_id,
      timeslot_id,
      day_id + 1,
      number_pitch_id,
      selectedOptionVal1
    );
    var selectedOptionVal2 = $(this).find(".cellStatus").find("#money2").val(); //selected option value
    updateMoney(
      pitch_id,
      timeslot_id,
      day_id + 2,
      number_pitch_id,
      selectedOptionVal2
    );
    var selectedOptionVal3 = $(this).find(".cellStatus").find("#money3").val(); //selected option value
    updateMoney(
      pitch_id,
      timeslot_id,
      day_id + 3,
      number_pitch_id,
      selectedOptionVal3
    );
    var selectedOptionVal4 = $(this).find(".cellStatus").find("#money4").val(); //selected option value
    updateMoney(
      pitch_id,
      timeslot_id,
      day_id + 4,
      number_pitch_id,
      selectedOptionVal4
    );
    var selectedOptionVal5 = $(this).find(".cellStatus").find("#money5").val(); //selected option value
    updateMoney(
      pitch_id,
      timeslot_id,
      day_id + 5,
      number_pitch_id,
      selectedOptionVal5
    );
    var selectedOptionVal6 = $(this).find(".cellStatus").find("#money6").val(); //selected option value
    updateMoney(
      pitch_id,
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
function readStatus(number_pitch_id) {
  var pitch_id = GetURLParameter("pitch_id");
  console.log("click luu pitch id" + pitch_id);
  var timeslot_id = 1;
  var day_id = 1;
  $("#myTable .trOK").each(function () {
    console.log(timeslot_id);
    var selectedOptionVal = $(this).find(".cellStatus").find("#status").val(); //selected option value
    updateStatusOfTime(
      pitch_id,
      timeslot_id,
      day_id,
      number_pitch_id,
      selectedOptionVal
    );
    var selectedOptionVal1 = $(this).find(".cellStatus").find("#status1").val(); //selected option value
    updateStatusOfTime(
      pitch_id,
      timeslot_id,
      day_id + 1,
      number_pitch_id,
      selectedOptionVal1
    );
    var selectedOptionVal2 = $(this).find(".cellStatus").find("#status2").val(); //selected option value
    updateStatusOfTime(
      pitch_id,
      timeslot_id,
      day_id + 2,
      number_pitch_id,
      selectedOptionVal2
    );
    var selectedOptionVal3 = $(this).find(".cellStatus").find("#status3").val(); //selected option value
    updateStatusOfTime(
      pitch_id,
      timeslot_id,
      day_id + 3,
      number_pitch_id,
      selectedOptionVal3
    );
    var selectedOptionVal4 = $(this).find(".cellStatus").find("#status4").val(); //selected option value
    updateStatusOfTime(
      pitch_id,
      timeslot_id,
      day_id + 4,
      number_pitch_id,
      selectedOptionVal4
    );
    var selectedOptionVal5 = $(this).find(".cellStatus").find("#status5").val(); //selected option value
    updateStatusOfTime(
      pitch_id,
      timeslot_id,
      day_id + 5,
      number_pitch_id,
      selectedOptionVal5
    );
    var selectedOptionVal6 = $(this).find(".cellStatus").find("#status6").val(); //selected option value
    updateStatusOfTime(
      pitch_id,
      timeslot_id,
      day_id + 6,
      number_pitch_id,
      selectedOptionVal6
    );
    console.log("llllllllllllllll" + selectedOptionVal);
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

function updateMoney(pitch_id, timeslot_id, day_id, number_pitch_id, money) {
  $.ajax({
    type: "POST",
    url:
      HOST +
      "/football/detail_pitch/updateMoney/" +
      pitch_id +
      "/" +
      timeslot_id +
      "/" +
      day_id +
      "/" +
      number_pitch_id +
      "/" +
      money,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function () {},
    error: function () {
      swal(
        "Cập nhật giá tiền sân bóng thất bại!",
        "Xin hãy thử lại sau!",
        "error"
      );
    },
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
      "/football/detail_pitch/updateStatus/" +
      pitch_id +
      "/" +
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
    success: function () {},
    error: function () {
      swal(
        "Cập nhật trạng thái sân bóng thất bại!",
        "Xin hãy thử lại sau!",
        "error"
      );
    },
  });
}

function readSlPitch() {
  var pitch_id = GetURLParameter("pitch_id");
  $.ajax({
    type: "GET",
    url: HOST + "/football/inventory/getSLPitch/" + pitch_id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("slsabbb" + result);
      if (result != 0) {
        readListNumberPitch(result);
        getStatusHire(1);
        getMoneyPitch(1);
        getRevenue(1);
      }
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
  document.getElementById("updateMoney").innerHTML = "";
  document.getElementById("revenue").innerHTML = "";
  document.getElementById("sumRevenue").innerHTML = "";
  document.getElementById("updatePitch").innerHTML +=
    '<h1 align = center style="color: #43a047;">Cập nhật trạng thái sân bóng</h1>' +
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

  document.getElementById("updateMoney").innerHTML +=
    '<h1 align = center style="color: #43a047;">Cập nhật giá tiền sân bóng</h1>' +
    "                               " +
    '<table id="myTable2" border= 2 style="margin: 0 auto;"> ' +
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
    '    <a href="#" id="LuuMoney" onclick="myFucntionLuuMoney(' +
    number_pitch_id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-spinner fa-spin"></i>Lưu Cập Nhật</a>' +
    "    <!-- fa fa-save -->" +
    "</div>";

  document.getElementById("revenue").innerHTML +=
    '<h1 align = center style="color: #43a047;">Lịch sử doanh thu sân bóng</h1>' +
    "                               " +
    '<table id="myTable3" border= 2 style="margin: 0 auto;"> ' +
    '    <tr style="background-color: #43a047; color: rgb(255, 255, 255);">' +
    '        <th width = 100 align="center">Tuần</th>' +
    "        <th width = 300>Tổng số tiền</th>" +
    "        <th width = 300>Ngày tính</th>" +
    "    </tr>" +
    "    " +
    "</table>";

  document.getElementById("sumRevenue").innerHTML =
    '<a id="TinhRevenue" onclick="myFucntionRevenue(' +
    number_pitch_id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-dollar"></i>Tính doanh thu tuần hiện tại</a>';

  getStatusHire(number_pitch_id);
  getMoneyPitch(number_pitch_id);
  getRevenue(number_pitch_id);
}

function createMiniPitch() {
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn tạo thêm sân bóng chứ? Quá trình này có thế mất một vài giây xin hãy đợi",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      var pitch_id = GetURLParameter("pitch_id");
      $.ajax({
        type: "POST",
        url: HOST + "/football/detail_pitch/create/" + pitch_id,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function () {
          swal(
            "Tạo thêm sân bóng thành công!",
            "Hệ thống đã gửi yêu cầu đặt sân của bạn đến chủ sân!",
            "success"
          );
          location.reload();
        },
        error: function () {
          swal("Tạo thêm sân bóng thất bại!", "Xin hãy thử lại sau!", "error");
        },
      });
    }
  );
}

function getRevenue(number_pitch_id) {
  var pitch_id = GetURLParameter("pitch_id");
  $.ajax({
    type: "GET",
    url: HOST + "/football/revenue/" + pitch_id + "/" + number_pitch_id,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var i = 1;
      for (var key in result) {
        var obj = result[key];
        readRevenue(i, obj.money_revenue, obj.created);
        i++;
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readRevenue(i, money_revenue, created) {
  cell0 = "<td>" + i + "</td>";
  cell1 = "<td>" + money_revenue + "</td>";
  cell2 = "<td>" + created + "</td>";

  $("#myTable3 tr:last").after("<tr>" + cell0 + cell1 + cell2 + "</tr>");
}

function myFucntionRevenue(number_pitch_id) {
  var pitch_id = GetURLParameter("pitch_id");
  swal(
    {
      title: "Bạn chắc chắn rằng?",
      text: "Bạn muốn tính doanh thu sân bóng tuần này?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Đồng ý",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/sumRevenue/" + pitch_id + "/" + number_pitch_id,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function () {
          swal("Done!", "Tính doanh thu sân bóng thành công!", "success");
          myFunction(number_pitch_id);
        },
        error: function () {
          swal("Done!", "Tính doanh thu sân bóng thất bại!", "error");
          console.log("da co loi");
        },
      });
    }
  );
}
