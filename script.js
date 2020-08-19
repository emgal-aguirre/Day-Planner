// var NowDate = new Date();
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var sDay = NowDate.getDate();
// var sMonth = NowDate.getMonth() + 1;
// var sYear = NowDate.getFullYear();
// var eDisplayDate = document.getElementById('displayJsDate');
// eDisplayDate = sMonth + '/' + sDay + '/' + sYear;

// var NowMoment = moment();
// var eCurrentDay = document.getElementById('currentDay');
// eCurrentDay.innerHTML = NowMoment.format('MM-DD-YYYY');

function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();