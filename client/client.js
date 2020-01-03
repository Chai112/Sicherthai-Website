var url = "https://sicher.000webhostapp.com/?id=";
var id = "aaa";
var q = "q";

url = url + id;
url = url + "&q="
url = url + q;
//var url = "http://validate.jsontest.com/?json=a";

function report(item, index)
{
    var id = item.id;
    var name = item.name.replace(/_/g," ");
    var is_public = item.is_public;
    var is_inhouse = item.is_inhouse;
    var date = item.date;
    var duration = item.duration;
    var price = item.price;
    var loc = item.location;
    var lecturer1_name = item.lecturer1_name;
    var lecturer2_name = item.lecturer2_name;
    var lecturer3_name = item.lecturer3_name;
    var lecturer4_name = item.lecturer4_name;
    var description = item.description;

    document.write("<p>" +
        "<b>id: " + id + ", " + name + "<br>");

    if (is_public === "1")
    {
        document.write("public training<br>");
    }
    else
    {
        document.write("in house training<br>");
    }

    document.write("</b>" +
        "date: " + date + "<br>" +
        "duration: " + duration + "<br>" +
        "price: " + price + "<br>" +
        "location: " + loc + "<br>" +
        "description: " + description + "<br>" +
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
