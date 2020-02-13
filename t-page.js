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

var items = [];

function report(item, index)
{
    item.name = item.name.replace(/_/g, " ");
    items[item.id] = item;
    

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
var ashow = 0;
$("#a-box").click(function() {
    if (ashow == 1)
    {
        $("#a").text("")
    }
    else
    {
        $("#a").text(gitem.objective)
    }
    ashow = !ashow;
});
var bshow = 0;
$("#b-box").click(function() {
    if (bshow == 1)
    {
        $("#b").text("")
    }
    else
    {
        $("#b").text(gitem.target_group)
    }
    bshow = !bshow;
});
var cshow = 0;
$("#c-box").click(function() {
    if (cshow == 1)
    {
        $("#c").text("")
    }
    else
    {
        $("#c").text(gitem.presentation_description)
    }
    cshow = !cshow;
});
var dshow = 0;
$("#d-box").click(function() {
    if (dshow == 1)
    {
        $("#d").text("")
    }
    else
    {
        document.getElementById("d").innerHTML =gitem.event_schedule;
    }
    dshow = !dshow;
});


function run() {
    $.getJSON(
        url,
        function(data) {
            var text = data.status;
            if (data.err)
            {
                alert("Internal Server Error, please try again");
                //SERVER ERROR
            }
            if (id !== data.id)
            {
                alert("Internal Server Error, please try again");
                //AUTH ERROR: IDs do not match
            }
            // learning objective - objective
            // target group
            // presentation description
            // content & schedule - event schedule

            //$("#out").text(text);
            //date 1-6
            //location 1-6
            data.answer.forEach(report);
            gitem = items[getParameterByName("p")];
            $("#reg-txt").text("REGISTER NOW | " + gitem.price + " THB");
            for (i = 1; i < 7; i++)
            {
                loc = 0;
                if (i === 1) {loc = gitem.location;}
                if (i === 2) {loc = gitem.location_2;}
                if (i === 3) {loc = gitem.location_3;}
                if (i === 4) {loc = gitem.location_4;}
                if (i === 5) {loc = gitem.location_5;}
                if (i === 6) {loc = gitem.location_6;}

                $("#location-" + i).text(loc);

                if (loc === null)
                    document.getElementById("location-" + i + "-row").style = "display:none";
                for (j = 1; j < 5; j++)
                {
                    date = 0;
                    if (i === 1 && j === 1) {date = gitem.date_1_1;}
                    if (i === 1 && j === 2) {date = gitem.date_1_2;}
                    if (i === 1 && j === 3) {date = gitem.date_1_3;}
                    if (i === 1 && j === 4) {date = gitem.date_1_4;}

                    if (i === 2 && j === 1) {date = gitem.date_2_1;}
                    if (i === 2 && j === 2) {date = gitem.date_2_2;}
                    if (i === 2 && j === 3) {date = gitem.date_2_3;}
                    if (i === 2 && j === 4) {date = gitem.date_2_4;}

                    if (i === 3 && j === 1) {date = gitem.date_3_1;}
                    if (i === 3 && j === 2) {date = gitem.date_3_2;}
                    if (i === 3 && j === 3) {date = gitem.date_3_3;}
                    if (i === 3 && j === 4) {date = gitem.date_3_4;}

                    if (i === 4 && j === 1) {date = gitem.date_4_1;}
                    if (i === 4 && j === 2) {date = gitem.date_4_2;}
                    if (i === 4 && j === 3) {date = gitem.date_4_3;}
                    if (i === 4 && j === 4) {date = gitem.date_4_4;}

                    if (i === 5 && j === 1) {date = gitem.date_5_1;}
                    if (i === 5 && j === 2) {date = gitem.date_5_2;}
                    if (i === 5 && j === 3) {date = gitem.date_5_3;}
                    if (i === 5 && j === 4) {date = gitem.date_5_4;}

                    if (i === 6 && j === 1) {date = gitem.date_6_1;}
                    if (i === 6 && j === 2) {date = gitem.date_6_2;}
                    if (i === 6 && j === 3) {date = gitem.date_6_3;}
                    if (i === 6 && j === 4) {date = gitem.date_6_4;}
                    $("#date-" + i + "-" + j).text(date);
                }
            }
            $("#t-title").text(gitem.name);
        }
    );

}

document.getElementById("reg").addEventListener("click", function()
{
    window.location.href = "mailto:contactus@sicherthai.com?subject=registeration form&body=test";
});

// We'll run the AJAX query when the page loads.
//$("#out").text("Connecting...");
window.onload=run
