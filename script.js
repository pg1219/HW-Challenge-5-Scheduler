var currentDate = dayjs().format("MMM D, YYYY h:mm A");
$("#currentDay").text(currentDate);


$(".saveBtn").on("click", function () {
  var textArea = $(this).siblings(".description").val();

  var timeBlock = $(this).parent().attr("id");

  localStorage.setItem(timeBlock, textArea);

});


$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

function checkTime() {
  var moment = dayjs();
  console.log(moment)

  $(".time-block").each(function () {
    var timeCheck = parseInt($(this).attr("id").split("hour-")[1]);

    console.log(timeCheck)

    if (timeCheck < moment) {
      $(this).addClass("past");
    } else if (timeCheck === moment) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).addClass("future");
      $(this).removeClass("present");
    }
  });
}

checkTime();


