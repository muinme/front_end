$("#btnCreatePitch").click(function () {
  console.log("ok chuaaaa");

  var formData = {
    name: $("#name").val(),
    introduce: $("#introduce").val(),
    type: $("#type").children("option:selected").val(),
    address: $("#address").val(),
    googlemap: $("#googlemap").val(),
    phone: $("#phone").val(),
    email: $("#email").val(),
    facebook: $("#facebook").val(),
  };

  console.log(formData);
  $.ajax({
    type: "POST",
    url: HOST + "/football/pitch/create/",
    dataType: "JSON",
    data: JSON.stringify(formData),
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("thanh cong");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
