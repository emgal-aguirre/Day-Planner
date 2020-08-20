//global variables 
var times = JSON.parse(localStorage.getItem("times"));
console.log(times)

// Displays date in real time
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();

// var value for hour = interger value 
var currentHour = parseInt(moment().format('hh'));
console.log(currentHour);

// function to change color by time 
$(".time-block").each(function () {
    var calendarHour = parseInt($(this).attr("data-hour"));
    console.log($(this).attr("data-hour"));


    if (calendarHour == currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    } else if (calendarHour > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    } else {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
});

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var taskDiscription = $(this).siblings("input")
    var storeTime = $(this).siblings("div")
    console.log(taskDiscription.val())
    console.log(storeTime.text())
    if (!times) {
        times = [];
    }
    times.push({
        "time": storeTime.text(),
        "taskDiscription": taskDiscription.val()
    })
    localStorage.setItem("times", JSON.stringify(times)
    )
})



