var services_pos = 0

var services_1_title = "Process Safety Management"
var services_2_title = "Hazourdous Material Safety"
var services_3_title = "Emergency Response"
var services_4_title = "Distribution Safety"
var services_5_title = "Safety Leadership"
var services_6_title = "Construction Safety"

var services_1_txt = "We provide high-standards of training, consulting and assesment. Directed by Mr. Chaimongkol and Dr. Schwarz who has over 28 years of experience and worked in BASF, the world\'s largest chemical company. Sicher has been certified by Industrial Authoriuty of Thailand (IEAT)."
var services_2_txt = "Under the Promotion for Scientific and Technological Professions Act, B.E, Sicher is only one of two companies has been nominated officially from the Thailand Council of Sciene and Technology Professionals to organize training and qualify for science professionals to produce, control and manage of chemical and hazardous materials."
var services_3_txt = "the Promotion for Scientific and Technological Professions Act, B.E, Sicher is only one of two companies has been nominated officially from the Thailand Council of Sciene and Technology Professionals to organize training and qualify for science professionals to produce, control and manage of chemical and hazardous materials."
var services_4_txt
var services_5_txt
var services_6_txt

function report(item, index)
{
    /*
    item.name = item.name.replace(/_/g, " ");
    $("#out-title").text(item.name);
    $("#out-txt").text(item.location + ", " + item.price + " THB");
    var out = document.getElementById("out").cloneNode(true);

    w = window.location.href;
    i = window.location.href.length;
    while (window.location.href[i] != '/')
    {
        i--;
    }
    $
    if (item.is_public === "1")
    {
        //document.write("public training<br>");
    }
    else
    {
        //document.write("in house training<br>");
    }
    */

    /*document.write("</b>" +
        "date: " + item.date + "<br>" +
        "duration: " + item.duration + "<br>" +
        "price: " + item.price + "<br>" +
        "location: " + item.location + "<br>" +
        "description: " + item.description + "<br>" +
        "</p>"
    );*/
    /*
    the display is very oddl placed the quick brown fox jumped over the lazy dog
    I cannot tell thje difference between the f and the j key
    The quick brown fox jumped over the lazy dog
    Indonesia's Tiger Population is dropping very fast
    */
    /*I am now typing with regular keys and creating a lot of noise. Sicher proviudes Process Safety Management training, consuilting and assessment by our international and national instreuctores and assessors who has a minimum of 25 ytears of PSM knowledge and experience in BASF and the national instructors and assesors who has a minimum of 25 years of PSM knopwledge and experience */
}
$("#services-left").click(function ()
{
    if (services_pos === 1)
    {
        services_pos = 0;
        $("#services-1-title").text(services_1_title);
        $("#services-2-title").text(services_2_title);
        $("#services-3-title").text(services_3_title);

        $("#services-1-txt").text(services_1_txt);
        $("#services-2-txt").text(services_2_txt);
        $("#services-3-txt").text(services_3_txt);

        document.getElementById("services-1-img").src="images/services/psm.jpg";
        document.getElementById("services-2-img").src="images/services/hazmat.jpg";
        document.getElementById("services-3-img").src="images/services/emergency-response.jpg";

    }
});
$("#services-right").click(function ()
{
    if (services_pos === 0)
    {
        services_pos = 1;
        $("#services-1-title").text(services_4_title);
        $("#services-2-title").text(services_5_title);
        $("#services-3-title").text(services_6_title);

        $("#services-1-txt").text(services_4_txt);
        $("#services-2-txt").text(services_5_txt);
        $("#services-3-txt").text(services_6_txt);

        document.getElementById("services-1-img").src="images/services/ds.jpg";
        document.getElementById("services-2-img").src="images/services/sl.jpg";
        document.getElementById("services-3-img").src="images/services/cs.jpg";
    }
});

// We'll run the AJAX query when the page loads.
//$("#out").text("Connecting...");
