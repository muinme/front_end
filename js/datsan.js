const HOST = "http://localhost:8080";
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