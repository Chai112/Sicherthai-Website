// This just displays the first parameter passed to it
// in an alert.

var url = "/test/server.php?id=%22hello%22/";

function run() {
    document.getElementById("out").innerHTML = "STAND BY (1/2)";
    $.getJSON(
        url,
        function(data) {
        
        var text = `City: ${data.city}<br>
                    ID: ${data.id}<br>`
                    
        
        $("#out").text("ALL GO (2/2) " + text);
    });
}

// We'll run the AJAX query when the page loads.
document.getElementById("out").innerHTML = "STAND BY (0/2)";
window.onload=run;
