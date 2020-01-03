var url = "https://sicher.000webhostapp.com/?id=";
var id = "aaa";
var q = "q";

url = url + id;
url = url + "&q="
url = url + q;
//var url = "http://validate.jsontest.com/?json=a";

function report(item, index)
{
    document.write("<p>" +
        item.id                      + ",<br>" + 
        item.name.replace(/_/g," ")  + ",<br>" +
        "</p>"
    );
}

function run() {
    $("#out").text("STAND BY (1/2)");
    $.getJSON(
        url,
        function(data) {
            var text = data.status;
            if (data.err)
            {
                text = "SERVER ERROR: " + text;
                alert(text);
            }
            if (id !== data.id)
            {
                text = "AUTH ERROR: IDs do not match";
            }

            $("#out").text(text);
            data.answer.forEach(report);
        }
    );
}

// We'll run the AJAX query when the page loads.
$("#out").text("STAND BY (0/2)");
window.onload=run;
