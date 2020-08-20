$(document).ready(function () {
    var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    $("body").append(`<footer class="jumbotron"> <h1>Footer Example</h1></footer>`)
    $(".container").html(`<div class="row">
    <div class="col-12 text-center">
    <h1>Today's date is</h1>
    <p id="today-date" class="text-danger">${todaysDate}</p>
    </div>
    </div>`)


    $(".container").prepend(`<div class="row">
<div class="col-12 text-center">
<div class="card">
<div class="card-header">
<h2>This is card header</h2>
</div>
<div class="card-body">
<p>card body text </p>
</div>
</div>
</div>
</div>`)
    console.log($("#today-date").attr("class", "text-info"))

})