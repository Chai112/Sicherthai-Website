var url = "https://sicher.000webhostapp.com/?id=";
var id = "aaa";
var q = "q";

url = url + id;
url = url + "&q="
url = url + q; var sep = 0; //var url = "http://validate.jsontest.com/?json=a";

var items = [];

function report(item, index)
{
    if (item.name === null)
        return;

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
        document.getElementById("b").innerHTML =gitem.target_group;
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
        document.getElementById("c").innerHTML =gitem.prerequisites;
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
        document.getElementById("d").innerHTML =gitem.itinerary;
    }
    dshow = !dshow;
});
var eshow = 0;
$("#e-box").click(function() {
    if (eshow == 1)
    {
        $("#lecturer1").text("")
        $("#lecturer2").text("")
        $("#lecturer3").text("")
        $("#lecturer4").text("")
    }
    else
    {
        if (gitem.lecturer1 !== undefined)
        document.getElementById('lecturer1').innerHTML = "<b>" + (c(gitem.lecturer1[0].firstname) + " " + c(gitem.lecturer1[0].surname) + "</b><br> " + c(gitem.lecturer1[0].license) + " " + c(gitem.lecturer1[0].description + "<br><br>"));
        if (gitem.lecturer2 !== undefined)
        document.getElementById('lecturer2').innerHTML = "<b>" + (c(gitem.lecturer2[0].firstname) + " " + c(gitem.lecturer2[0].surname) + "</b><br> " + c(gitem.lecturer2[0].license) + " " + c(gitem.lecturer2[0].description + "<br><br>"));
        if (gitem.lecturer3 !== undefined)
        document.getElementById('lecturer3').innerHTML = "<b>" + (c(gitem.lecturer3[0].firstname) + " " + c(gitem.lecturer3[0].surname) + "</b><br> " + c(gitem.lecturer3[0].license) + " " + c(gitem.lecturer3[0].description + "<br><br>"));

        if (gitem.lecturer4 !== undefined)
        document.getElementById('lecturer4').innerHTML = "<b>" + (c(gitem.lecturer4[0].firstname) + " " + c(gitem.lecturer4[0].surname) + "</b><br> " + c(gitem.lecturer4[0].license) + " " + c(gitem.lecturer4[0].description + "<br><br>"));
    }
    eshow = !eshow;
});

function convDate (date)
{
    if (date === null || date === undefined)
        return null;
    if (gitem.duration == "0")
        return months[parseInt(date.substring(5,7))] + " " +  date.substring(8,10);
    return months[parseInt(date.substring(5,7))] + " " +  date.substring(8,10) + " - " + (parseInt(date.substring(8,10))+parseInt(gitem.duration))%mdays[parseInt(date.substring(5,7))];
}

function c (str)
{
    if (str=== null || str=== undefined)
        return "";
    return str;
}

months = [
    "",
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

mdays = [
    31,
    29,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
    30,
    31,
];

function run(data) {
    //date 1-6
    //location 1-6
    gitem = data.answer[0];
    if (gitem.location === undefined) // inhouse if true
        document.getElementById("tab").style = "display:none";
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
            $("#date-" + i + "-" + j).text(convDate(date));
        }
    }
    $("#t-title").text(gitem.name);
    //$('#lecturer').text(gitem.lecturer1_name[0].firstname);
}

document.getElementById("reg").addEventListener("click", function()
{
    window.location.href = "https://docs.google.com/forms/d/1ZnGvHuWEVDVlzBIxs08RE-ozT3LtpUWqRIIgrNPu6Sg/edit";
});

// We'll run the AJAX query when the page loads.
//$("#out").text("Connecting...");

$.getScript('js/comms.js', function()
{
    var s = new Connection(server_url);
    var rqstquery = [
        {name:"type", val:"REQUEST"},
        {name:"item", val:getParameterByName("type")},
        {name:"id", val:getParameterByName("p")}
    ];

    s.query(rqstquery, function(data){
        run(data);
    });
});
