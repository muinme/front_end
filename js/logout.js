document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$("#logout").click(function () {
  console.log("logout button is pressed");
  $.ajax({
    type: "POST",
    url: HOST + "/football/logout",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("thanh cong");
      window.location.replace("http://traibonglan.com/index.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
