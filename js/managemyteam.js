document.write('<script type="text/javascript" src="/js/host.js" ></script>');

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/football/teamFootBall/Username",
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
        console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.id);
        readTeam(obj.name, obj.logo, obj.image, obj.id);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
function readTeam(fullname, logo, image, id) {
  document.getElementById("listTeam").innerHTML +=
    '<tr id="team' +
    id +
    '" ng-repeat="stadium in stadiums" class="ng-scope"' +
    '                                                            style="text-align: left;">' +
    '                                                            <td class="ng-binding"></td>' +
    "                                                            <td>" +
    '                                                                <a><strong class="ng-binding">' +
    fullname +
    "" +
    "                                                                      </strong></a>" +
    "                                                            </td>" +
    "                                                            <td>" +
    '                                                                <img height="120" src="' +
    logo +
    '">' +
    "                                                            </td>" +
    "                                                            <td>" +
    '                                                                <img height="120" src="' +
    image +
    '">' +
    "                                                            </td>" +
    "" +
    '                                                            <td align="right" style="text-align:right">' +
    '                                                                <div class="form-group">' +
    '                                                                    <a href="changeinformationteam.html?football_id=' +
    id +
    '"' +
    '                                                                        class="btn btn-primary btn-primary-extra dropdown-toggle"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="glyphicon glyphicon-pencil"></i> S???a' +
    "                                                                        th??ng tin</a>" +
    "                                                                    <br>" +
    " <a" +
    '                                             onclick="myFunction(' +
    id +
    ')" class="btn btn-danger btn-sm"' +
    '                                                                        title="X??a"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="glyphicon glyphicon-remove-circle"></i>' +
    "                                                                        X??a</a>" +
    "                                                                </div>" +
    "                                                            </td>" +
    "                                                        </tr>";
}

function myFunction(id) {
  console.log("id" + id);
  swal(
    {
      title: "B???n ch???c ch???n r???ng?",
      text: "B???n mu???n x??a ?????i b??ng n??y ch????",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "?????ng ??",
      closeOnConfirm: false,
    },
    function () {
      $.ajax({
        type: "POST",
        url: HOST + "/football/teamFootBall/delete/" + id,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        xhrFields: {
          withCredentials: true,
        },
        success: function () {
          deleteRow("listTeam", "team" + id + "");
          swal(
            "X??a ?????i b??ng th??nh c??ng!",
            "H??? th???ng ???? l??u l???i qu?? tr??nh thay ?????i c???a b???n!",
            "success"
          );
        },
        error: function () {
          console.log("da co loi");
          swal("X??a ?????i b??ng th???t b???i!", "Xin h??y th??? l???i sau!", "error");
        },
      });
    }
  );
}

function deleteRow(tbodyid, rowid) {
  document.getElementById(tbodyid).removeChild(document.getElementById(rowid));
}
