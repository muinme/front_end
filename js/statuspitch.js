const HOST = "http://traibonglan:8080";
$("#LuuStatus").click(function () {
  readStatus();
  // $.ajax({
  //   type: "POST",
  //   url: HOST + "/football/historyMatch1/create/" + id,
  //   crossDomain: true,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   xhrFields: {
  //     withCredentials: true,
  //   },
  //   success: function (result) {
  //     console.log("thanh cong");
  //   },
  //   error: function () {
  //     console.log("da co loi");
  //   },
  // });
});

function readStatus() {
  var timeslot_id = 1;
  var day_id = 1;
  var number_pitch_id = 1;
  $("#mytable .trOK").each(function () {
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
