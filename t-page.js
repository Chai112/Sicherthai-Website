var url = "https://sicher.000webhostapp.com/?id=";
var id = "aaa";
var q = "q";

url = url + id;
url = url + "&q="
url = url + q;

var sep = 0;
//var url = "http://validate.jsontest.com/?json=a";

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function report(item, index)
{
    item.name = item.name.replace(/_/g, " ");

    $("#out-title").text(item.name);
    $("#out-txt").text("a");
    var out = document.getElementById("out").cloneNode(true);
    out.style="max-width:50%;height:10vh;margin-top:" + sep + "em";
    list.style="margin-bottom:" + (sep + 11) + "em";
    sep = sep + 7;
    document.getElementById("list").appendChild(out);

    if (item.is_public === "1")
    {
        //document.write("public training<br>");
    }
    else
    {
        //document.write("in house training<br>");
    }

    /*document.write("</b>" +
        "date: " + item.date + "<br>" +
        "duration: " + item.duration + "<br>" +
        "price: " + item.price + "<br>" +
        "location: " + item.location + "<br>" +
        "description: " + item.description + "<br>" +
        "</p>"
    );*/
}

function run() {
    //alert(getParameterByName("p"));
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

            //$("#out").text(text);
            data.answer.forEach(report);
        }
    );
}

// We'll run the AJAX query when the page loads.
//$("#out").text("Connecting...");
window.onload=run;
