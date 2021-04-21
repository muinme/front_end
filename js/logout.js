const HOST = "http://localhost:8080";

$("#logout").click(function () {
  console.log("logout button is pressed");
  $.ajax({
    type: "POST",
    url: HOST + "/football/logout",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      console.log("thanh cong");
      window.location.replace("http://localhost:5500/index.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
