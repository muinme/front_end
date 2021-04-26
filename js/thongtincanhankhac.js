const HOST = "http://localhost:8080";
$(document).ready(function () {
  var id = GetURLParameter("user_id");

  $.ajax({
    type: "GET",
    url: HOST + "/football/userById/" + id,
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      var obj = result;
      console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.fullname);
      createThongTinCaNhan(obj.fullname, obj.email, obj.phone, obj.created);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

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

function createThongTinCaNhan(fullname, email, phone, created) {
    document.getElementById("frmEditProfile").innerHTML +=
        
}
