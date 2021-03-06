document.write('<script type="text/javascript" src="/js/host.js" ></script>');
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/football/requestMatch/Username",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      for (var key in result) {
        var obj = result[key];
        console.log(obj.user_id);
        console.log("id request" + obj.id);
        readUser2(obj.user_id, obj.id, obj.created, obj.wait_match_team_id);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readUser2(user_id, id, created, wait_match_team_id) {
  console.log("user_id" + user_id);
  console.log(created);
  console.log(wait_match_team_id);
  $.ajax({
    type: "GET",
    url: HOST + "/football/userById/" + user_id,
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
      console.log(obj.fullname);
      readPost(
        obj.fullname,
        obj.phone,
        obj.email,
        id,
        created,
        wait_match_team_id
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}
function readPost(fullname, phone, email, id, created, wait_match_team_id) {
  $.ajax({
    type: "GET",
    url: HOST + "/football/postMatchTeam/" + wait_match_team_id,
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
      readYeuCau(
        fullname,
        phone,
        email,
        id,
        created,
        wait_match_team_id,
        obj.playtime,
        obj.playdate,
        obj.nameyard,
        obj.category
      );
    },
    error: function () {
      console.log("da co loi");
    },
  });
}

function readYeuCau(
  fullname,
  phone,
  email,
  id,
  created,
  wait_match_team_id,
  playtime,
  playdate,
  nameyard,
  category
) {
  document.getElementById("tbYeuCau").innerHTML +=
    '    <tr id="yc' +
    id +
    '"class="ng-scope" style="text-align: left;">' +
    '        <td class="ng-binding">1</td>' +
    "        <td>" +
    '           <a><strong class="ng-binding">' +
    fullname +
    "</strong></a>" +
    '       <div class="ng-scope">' +
    '               <i class="fa fa-phone-square"></i> <a class="ng-binding">' +
    phone +
    "</a>" +
    "           </div>" +
    '           <div class="ng-scope">' +
    '               <i class="fa fa-envelope-o" aria-hidden="true"></i> <a class="ng-binding"> ' +
    email +
    "</a>" +
    "           </div>" +
    "       </td>" +
    "        <td>" +
    '           <i class="fa fa-clock-o"></i><a><strong class="ng-binding">' +
    playtime +
    " " +
    playdate +
    "</strong></a>" +
    '           <div class="ng-scope">' +
    '                   <i class="fa fa-bookmark"></i> <a class="ng-binding">' +
    nameyard +
    "</a>" +
    "               </div>" +
    '               <div class="ng-scope">' +
    '                   <i class="fa fa-asl-interpreting"></i> <a class="ng-binding">K??o: ' +
    category +
    "</a>" +
    "               </div>" +
    "        </td>" +
    "        <td>" +
    '           <i class="fa fa-clock-o"></i><a><strong class="ng-binding">' +
    created +
    "</strong></a>" +
    "            </td>" +
    '        <td align="right" style="text-align:right">' +
    '            <div class="form-group">' +
    '                <a id ="ChapNhan" onclick="myFunction1(' +
    id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-check-o"></i>Ch???p Nh???n</a>' +
    "            </div>" +
    '            <div class="form-group">' +
    '                  <a id ="TuChoi" onclick="myFunction2(' +
    id +
    ')" class="btn btn-primary btn-primary-extra dropdown-toggle" style="float:none; padding: 5px 20px;"><i class="fa fa-calendar-times-o"></i>T??? Ch???i</a>' +
    "            </div>" +
    "        </td>" +
    "    </tr>";
}

function myFunction1(id) {
  swal(
    {
      title: "B???n ch???c ch???n r???ng?",
      text: "B???n mu???n ch???p nh???n y??u c???u b???t ?????i giao h???u n??y ch????",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "?????ng ??",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/historyMatch1/create/" + id,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function () {
          deleteRow("tbYeuCau", "yc" + id + "");
          swal(
            "Ch???p nh???n y??u c???u b???t ?????i th??nh c??ng!",
            "Xin h??y th??? l???i sau!",
            "success"
          );
        },
        error: function () {
          swal(
            "Ch???p nh???n y??u c???u b???t ?????i th???t b???i!",
            "Xin h??y th??? l???i sau!",
            "error"
          );
        },
      });
    }
  );
}
function myFunction2(id) {
  swal(
    {
      title: "B???n ch???c ch???n r???ng?",
      text: "B???n mu???n t??? ch???i y??u c???u b???t ?????i giao h???u n??y ch????",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "?????ng ??",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/historyMatch2/create/" + id,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function () {
          deleteRow("tbYeuCau", "yc" + id + "");
          swal(
            "T??? ch???i y??u c???u b???t ?????i th??nh c??ng!",
            "H??? th???ng ???? l??u l???i qu?? tr??nh t??? ch???i c???a b???n!",
            "success"
          );
        },
        error: function () {
          swal(
            "T??? ch???i y??u c???u b???t ?????i th???t b???i!",
            "Xin h??y th??? l???i sau!",
            "error"
          );
        },
      });
    }
  );
}

function deleteRow(tbodyid, rowid) {
  document.getElementById(tbodyid).removeChild(document.getElementById(rowid));
}
