$(document).ready(function () {
  var permission = null;
  $.ajax({
    type: "GET",
    url: HOST + "/football/permission/Username",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("re" + result);
      readUserAfterCheckPermission(result);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readUserAfterCheckPermission(permission) {
  console.log("vcl");
  $.ajax({
    type: "GET",
    url: HOST + "/football/userByUsername",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var obj = result;
      console.log("permi" + permission);
      if (permission == "member") {
        swapNoLoginAndUserLogin();
        readUser(obj.fullname, obj.image, obj.id);
      }
      if (permission == "admin") {
        swapNoLoginAndUserLogin();
        readAdmin(obj.fullname, obj.image, obj.id);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readUser(fullname, image) {
  console.log("jdjsjidooooooooooooooo");
  document.getElementById("liUser").innerHTML +=
    '<button class="dropbtn"><img src="' +
    image +
    '" class="avatar img-fluid rounded-circle">' +
    fullname +
    "</button>" +
    '                                <div class="dropdown-content">' +
    '                                    <a href="myprofile.html"><i class="fa fa-user"></i>Profile</a>' +
    '                                    <a href="myteam.html"><i class="fa fa-futbol-o"></i>My Team FootBall</a>' +
    '                                    <a href="mypitch.html"><i class="fa fa-th-large"></i>My Pitch</a>' +
    '                                    <a href="historyorderpitch.html"><i class="fa fa-history"></i>History Pitch</a>' +
    '                                    <a href="historymatch.html"><i class="fa fa-history"></i>History Match</a>' +
    '                                    <button id = "logout" style="text-align:left ;border-radius: 0px; width: 190px;"><i class="fa fa-sign-out"></i>Logout ???</button>' +
    "                                </div>";
  $("#logout").click(function () {
    swal(
      {
        title: "B???n ch???c ch???n r???ng?",
        text: "B???n s??? ????ng xu???t kh???i h??? th???ng?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "????ng Xu???t",
        closeOnConfirm: false,
      },
      function () {
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
            swal("???? ????ng xu???t!", "H???n g???p l???i b???n nh??", "success");
            console.log("thanh cong");
            window.location.replace("http://traibonglan.com/index.html");
          },
          error: function () {
            swal("????ng xu???t b??? l???i", "Xin h??y th??? l???i", "success");
            console.log("da co loi");
          },
        });
      }
    );
  });
}
function readAdmin(fullname, image) {
  console.log("jdjsjidooooooooooooooo + admin");
  document.getElementById("liUser").innerHTML +=
    '<button class="dropbtn"><img src="' +
    image +
    '" class="avatar img-fluid rounded-circle">' +
    fullname +
    "</button>" +
    '                                <div class="dropdown-content">' +
    '                                    <a href="myprofile.html"><i class="fa fa-user"></i>Profile</a>' +
    '                                    <a href="managementuser.html"><i class="fa fa-futbol-o"></i>Qu???n L?? User</a>' +
    '                                    <a href="managementpitch.html"><i class="fa fa-th-large"></i>Qu???n L?? S??n B??ng</a>' +
    '                                    <a href="managementteam.html"><i class="fa fa-history"></i>Qu???n L?? ?????i B??ng</a>' +
    '                                    <button id = "logout" style="text-align:left ;border-radius: 0px; width: 190px;"><i class="fa fa-sign-out"></i>Logout ???</button>' +
    "                                </div>";
  $("#logout").click(function () {
    swal(
      {
        title: "B???n ch???c ch???n r???ng?",
        text: "B???n s??? ????ng xu???t kh???i h??? th???ng ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "????ng Xu???t",
        closeOnConfirm: false,
      },
      function () {
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
            swal("???? ????ng xu???t!", "H???n g???p l???i b???n nh??", "success");
            console.log("thanh cong");
            window.location.replace("http://traibonglan.com/index.html");
          },
          error: function () {
            swal("????ng xu???t b??? l???i", "Xin h??y th??? l???i", "success");
            console.log("da co loi");
          },
        });
      }
    );
  });
}

function swapNoLoginAndUserLogin() {
  console.log("swap login");
  document.getElementById("NoLogin").style.display = "none";
  document.getElementById("UserLogin").style.display = "block";
}
function checkPermission() {
  console.log("check qqqqqqqqqq");
  $.ajax({
    type: "GET",
    url: HOST + "/football/permission/Username",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var permission = result;
      console.log(permission);
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
