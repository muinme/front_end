function swap() {
  document.getElementById("container1").style.display = "none";
  document.getElementById("container11").style.display = "none";
  document.getElementById("container2").style.display = "block";
  document.getElementById("container22").style.display = "block";

  $("#btnChangePass").click(function () {
    var id = GetURLParameter("user_id");

    console.log("jjd" + id);
    var password = $("#UserPassword").val();
    var newPassword = $("#NewUserPassword").val();
    var confirmPassword = $("#ConfirmNewUserPassword").val();
    if (checkConfirmPassword(newPassword, confirmPassword) == true) {
      readUserById(id, newPassword);
    }
  });
}
function swap2() {
  document.getElementById("container2").style.display = "none";
  document.getElementById("container22").style.display = "none";
  document.getElementById("container1").style.display = "block";
  document.getElementById("container11").style.display = "block";
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
function readUserById(id, newPassword) {
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
      updateProfile(obj.username, newPassword);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function updateProfile(username, newPassword) {
  console.log(newPassword);
  var formData = {
    password: newPassword,
  };
  console.log(formData);
  $.ajax({
    type: "POST",
    url: HOST + "/football/user/updatePassWordByUsername/" + username,
    dataType: "JSON",
    data: JSON.stringify(formData),
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (result) {
      console.log("thanh cong");
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function checkConfirmPassword(password, confirmPassword) {
  if (password != confirmPassword) {
    alert("Mật khẩu mới và Xác nhận lại mật khẩu mới không trùng khớp");
    return false;
  }
  return true;
}

function checkOldPassword(oldPassword, dataPassword) {}
