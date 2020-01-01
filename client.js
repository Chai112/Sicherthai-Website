// This just displays the first parameter passed to it
// in an alert.

var url = "http://192.168.1.107:80/test/server.php?id=%22hello%22/";

function run() {
    $("#out").text("STAND BY (1/2)");
    $.getJSON(
        url,
        function(data) {

            var text = `City: ${data.city}<br>
                        ID: ${data.id}<br>`
            
            $("#out").text("ALL GO (2/2) " + text);
        }
    );
}

// We'll run the AJAX query when the page loads.
$("#out").text("STAND BY (0/2)");
window.onload=run;
