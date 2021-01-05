// use document ready function to load html before javascript
$(document).ready(function() {

   // displays today's date on page using moment
   $("#today").text(moment().format("dddd, MMMM Do, YYYY"));
   
  // click function
  $(".saveBtn").on("click", function() {
    // set variable for description text
    var description = $(this).siblings(".description").val();
    // set variable for hour block
    var hourBlock = $(this).parent().attr("id");

    // save value of each variable in local storage
    localStorage.setItem(hourBlock, description);
  });

  function plannerStyle() {
    // gets current time in hours using moment
    var currentTime = moment().hours();
    //check in console
    console.log("It is currently " + currentTime);

    // loop for all html id-time-blocks
    $(".time-block").each(function() {
      //vareiable that obtains number from the id value
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);

      // if time has passed, update styling to turn timeBlock gray
      if (timeBlock < currentTime) {
        $(this).addClass("past");
      } 

      // in current time-block, add present styling to turn block red
      else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 

      // otherwise, future styling is green using future class
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
//call plannerStyle function
  plannerStyle();

  // update time/planner using setInterval
  var interval = setInterval(plannerStyle, 30000);

  // load and display any descriptions saved in local storage
  $("#block-7 .description").val(localStorage.getItem("block-7"));
  $("#block-8 .description").val(localStorage.getItem("block-8"));
  $("#block-9 .description").val(localStorage.getItem("block-9"));
  $("#block-10 .description").val(localStorage.getItem("block-10"));
  $("#block-11 .description").val(localStorage.getItem("block-11"));
  $("#block-12 .description").val(localStorage.getItem("block-12"));
  $("#block-13 .description").val(localStorage.getItem("block-13"));
  $("#block-14 .description").val(localStorage.getItem("block-14"));
  $("#block-15 .description").val(localStorage.getItem("block-15"));
  $("#block-16 .description").val(localStorage.getItem("block-16"));
  $("#block-17 .description").val(localStorage.getItem("block-17"));

});
