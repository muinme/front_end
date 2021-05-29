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
    '<tr ng-repeat="stadium in stadiums" class="ng-scope"' +
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
    '                                                                <img height="120" src="images/san1.jpg">' +
    "                                                            </td>" +
    "" +
    '                                                            <td align="right" style="text-align:right">' +
    '                                                                <div class="form-group">' +
    '                                                                    <a href="createpitch.html?football_id=' +
    id +
    '"' +
    '                                                                        class="btn btn-primary btn-primary-extra dropdown-toggle"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="glyphicon glyphicon-pencil"></i> Sửa' +
    "                                                                        thông tin</a>" +
    "                                                                    <br>" +
    " <a" +
    '                                                                        class="btn btn-danger btn-sm"' +
    '                                                                        title="Xóa"' +
    '                                                                        style="float:none; padding: 5px 20px;"><i' +
    '                                                                            class="glyphicon glyphicon-remove-circle"></i>' +
    "                                                                        Xóa</a>" +
    "                                                                </div>" +
    "                                                            </td>" +
    "                                                        </tr>";
}
