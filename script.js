$("#currentDay").append(moment().format("MMMM Do YYYY"));
var time = moment().format("H");

//Load functionality when page loads fully
$(document).ready(function () {
    $("input").each(elem => {
        var id = $("input")[elem].id;
        var elemTime = parseInt($("#" + id).attr("data-time"));

        //Set this to test
        // time = 12;

        var value = localStorage.getItem(id);

        $("#" + id).val(value);
        if (elemTime < time) {
            $("#" + id).addClass("past");
        } else if (elemTime == time) {
            $("#" + id).addClass("current");
        } else {
            $("#" + id).addClass("future");
        }
    });
});

//Save functionality
$("button").each(elem => {
    $("button")[elem].onclick = function (e) {
        var input = this.id.substring(0, this.id.length - 5);
        localStorage.setItem(input, $('#' + input).val());
    };

    //Build CLear Button fucntionallity
    $("button")[elem].onclick = function (e) {
        var input = this.id.substring(0, this.id.length - 5);
        localStorage.setItem(input, $('#' + input).val());
    };
});
