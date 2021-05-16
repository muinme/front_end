$("#btnCreateTeam").click(function () {
  console.log("ok chuaaaa");

  var formData = {
    name: $("#name").val(),
    address: $("#address").children("option:selected").text(),
    agemin: $("#agemin").val(),
    agemax: $("#agemax").val(),
    homeyard: $("#homeyard").val(),
    actiontime: $("#actiontime").val(),
    level: $("#level").val(),
    introduce: $("#introduce").val(),
  };
  console.log(formData);
  $.ajax({
    type: "POST",
    url: HOST + "/football/teamFootBall/create/",
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
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
