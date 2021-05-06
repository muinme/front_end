// const HOST = "http://traibonglan.com";
// $(document).ready(function () {
//   console.log("login button is pressed");
//   $.ajax({
//     type: "POST",
//     url: "https://thongtindoanhnghiep.co/api/city",
//     dataType: "JSON",
//     crossDomain: true,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     success: function (result) {
//       console.log("sss" + result);
//       //console.log("thanh cong " + resultss);
//       for (var key in result.LtsItem) {
//         var obj = result.LtsItem[key];
//         console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.id);
//         //create div san bong
//         // createSanBong(obj.name, obj.image, obj.id);
//       }
//       //   window.location.replace("http://localhost:5500/index_user.html");
//     },
//     error: function () {
//       console.log("da co loi");
//     },
//   });
// });

// function createSanBong(namePitch, image, id) {
//   $.ajax({
//     type: "GET",
//     url: HOST + "/football/userByFootBallId/" + id,
//     dataType: "JSON",
//     crossDomain: true,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     success: function (result2) {
//       console.log("sss" + result2);
//       var obj1 = result2;
//       console.log(
//         "object= " + JSON.stringify(obj1) + "\nid = " + obj1.fullname
//       );
//       createSanBong2(namePitch, image, obj1.fullname, obj1.phone);
//       //create div san bong
//       //create div san bong
//       //   window.location.replace("http://localhost:5500/index_user.html");
//     },
//     error: function () {
//       console.log("da co loi");
//     },
//   });
// }
