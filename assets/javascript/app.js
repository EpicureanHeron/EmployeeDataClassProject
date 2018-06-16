 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyA95kDuFcqGTHd8oPVtiSsNkc72ohJWysM",
    authDomain: "employeedatabase-8714f.firebaseapp.com",
    databaseURL: "https://employeedatabase-8714f.firebaseio.com",
    projectId: "employeedatabase-8714f",
    storageBucket: "",
    messagingSenderId: "869243386085"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var employeeName, employeeRole, employeeDate, employeeRate, employeeMonths

//
$("#submit").on("click", function() {
  event.preventDefault();

  console.log("Submit is clicked.")
    //this employee name
    employeeName = $("#nameSubmit").val().trim()
    console.log(employeeName)
    employeeRole = $("#roleSubmit").val().trim()
    employeeDate = $("#dateSubmit").val().trim()
    // employeeMonths = $("#monthsSubmit").val().trim
    employeeRate = $("#rateSubmit").val().trim()
    //employeeEarning = employeeRate * employeeMonths
    database.ref().push({
        employeeName: employeeName,
        employeeRole: employeeRole,
        employeeDate: employeeDate,
        //employeeMonths: employeeMonths
        employeeRate: employeeRate
      })
      console.log(employeeName)
      $("#eName").html(employeeName)
      $("#eRole").html(employeeRole)
      $("#eDate").html(employeeDate)
      $("#eMonths").html(employeeMonths)
      $("#eRate").html(employeeRate)
})

// $("#submit").on("click", function() {
//     employeeRole = $("#nameSubmit").val().trim
//     database.ref().push({
//         employeeRole: employeeRole
//       })
//       console.log(employeeRole)
//       $("#eRole").html(employeeRole)
// })

// $("#submit").on("click", function() {
//     employeeDate = $("#dateSubmit").val().trim
//     database.ref().push({
//         employeeDate: employeeDate
//       })
//       console.log(employeeDate)
//       $("#eDate").html(employeeDate)
// })

// $("#submit").on("click", function() {
//     employeeMonths = $("#monthsSubmit").val().trim
//     database.ref().push({
//         employeeMonths: employeeMonths
//       })
//       console.log(employeeMonths)
//       $("#eMonths").html(employeeMonths)
// })

// $("#submit").on("click", function() {
//     employeeRate = $("#rateSubmit").val().trim
//     database.ref().push({
//         employeeRate: employeeRate
//       })
//       console.log(employeeRate)
//       $("#eRate").html(employeeRate)
// })

// $("#submit").on("click", function() {
//     employeeEarning = employeeRate * employeeMonths
//       console.log(employeeEarning)
//       $("#eEarning").html(employeeEarning)
// })

// //JAVASCRIPT IN//
// $(“#eTable”).append(
//     “<tr><th scope=‘row’>” + numEmployees +
//     “</th>” +
//     “<td>” + eName + “</td>” +
//     “<td>” + eRole + “</td>” +
//     “<td>” + eDate + “</td>” +
//     “<td>” + eMonths + “</td>” +
//     “<td>” + eRate + “</td>” +
//     “<td>” + eEarnings + “</td>” +
//     “</tr>”
//  )