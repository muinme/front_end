$("#btnCreateMatch").click(function () {
  console.log("ok chuaaaa");
  var team = $("#inpTeam").val();
  var formData = {
    playtime: $("#inpTime").val(),
    playdate: new Date($("#inpDate").val()),
    home_guest: $("input[name='homeguest']:checked").val(),
    city: $("#selTinh").children("option:selected").val(),
    nameyard: $("#inpNameyard").val(),
    againt: $("#selAgaint").children("option:selected").val(),
    category: $("#inpCategory").val(),
    levelwant: $("#inpLevelwant").val(),
    note: $("#texNote").val(),
  };

  console.log(formData);
  $.ajax({
    type: "POST",
    url: HOST + "/football/postMatchTeam/create/" + team,
    dataType: "JSON",
    data: JSON.stringify(formData),
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("thanh cong");
      // window.location.replace("http://localhost:5500/login.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
