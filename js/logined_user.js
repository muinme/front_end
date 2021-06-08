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
    '                                    <button id = "logout" style="text-align:left ;border-radius: 0px; width: 190px;"><i class="fa fa-sign-out"></i>Logout →</button>' +
    "                                </div>";
  $("#logout").click(function () {
    swal(
      {
        title: "Bạn chắc chắn rằng?",
        text: "Bạn sẽ đăng xuất khỏi hệ thống?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Đăng Xuất",
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
            swal("Đã đăng xuất!", "Hẹn gặp lại bạn nhé", "success");
            console.log("thanh cong");
            window.location.replace("http://localhost:5501/index.html");
          },
          error: function () {
            swal("Đăng xuất bị lỗi", "Xin hãy thử lại", "success");
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
    '                                    <a href="managementuser.html"><i class="fa fa-futbol-o"></i>Quản Lý User</a>' +
    '                                    <a href="managementpitch.html"><i class="fa fa-th-large"></i>Quản Lý Sân Bóng</a>' +
    '                                    <a href="managementteam.html"><i class="fa fa-history"></i>Quản Lý Đội Bóng</a>' +
    '                                    <button id = "logout" style="text-align:left ;border-radius: 0px; width: 190px;"><i class="fa fa-sign-out"></i>Logout →</button>' +
    "                                </div>";
  $("#logout").click(function () {
    swal(
      {
        title: "Bạn chắc chắn rằng?",
        text: "Bạn sẽ đăng xuất khỏi hệ thống ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Đăng Xuất",
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
            swal("Đã đăng xuất!", "Hẹn gặp lại bạn nhé", "success");
            console.log("thanh cong");
            window.location.replace("http://localhost:5501/index.html");
          },
          error: function () {
            swal("Đăng xuất bị lỗi", "Xin hãy thử lại", "success");
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
