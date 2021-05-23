document.write('<script type="text/javascript" src="/js/host.js" ></script>');
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/football/detailPitch/getStatusHire/1/1/",
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
});

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

  cell0 = '<td align="center">8h-9h30</td>';
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

$("#LuuStatus").click(function () {
  readStatus();
});

function readStatus() {
  console.log("click luu");
  var timeslot_id = 1;
  var day_id = 1;
  var number_pitch_id = 1;
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
