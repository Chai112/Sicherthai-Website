var services_pos = 0

var services_1_title = "Process Safety Management"
var services_2_title = "Hazourdous Material Safety"
var services_3_title = "Emergency Response"
var services_4_title = "Distribution Safety"
var services_5_title = "Occupational Health and Safety Management"
var services_6_title = "Construction Safety"

var services_1_txt = "We provide high-standards of training, consulting and assesment. Directed by Mr. Chaimongkol and Dr. Schwarz who has over 28 years of experience and worked in BASF, the world\'s largest chemical company. Sicher has been certified by Industrial Authoriuty of Thailand (IEAT)."
var services_2_txt = "Under the Promotion for Scientific and Technological Professions Act, B.E, Sicher is only one of two companies has been nominated officially from the Thailand Council of Sciene and Technology Professionals to organize training and qualify for science professionals to produce, control and manage of chemical and hazardous materials."
var services_3_txt = "the Promotion for Scientific and Technological Professions Act, B.E, Sicher is only one of two companies has been nominated officially from the Thailand Council of Sciene and Technology Professionals to organize training and qualify for science professionals to produce, control and manage of chemical and hazardous materials."
var services_4_txt = "We support the safe transport, handling and storage of dangerous goods and hazardous substances. To achieve this we provide safety and consulting services for our clients in accordance with recognized national and international standards in Thailand and other countries."
var services_5_txt = "With the official partner between Robere and Associates Company - first approved training partner in Asia Pacific by CQI - The Chartered Quality Institute and IRCA: International Register of Certified Auditors from the United Kingdom and Sicher Company Limited, we provide  training and consulting of ISO 45001- Occupational Health and Safety Management System and  ISO 3100 - Risk Management System for all clients."
var services_6_txt = "The fatal injury rate for the construction industry is higher than the national average in this category for all industries. In our passion to protect the life of workers ,Sicher focus in this area and support the clients to decrease incidents and protect the life of people and properties."

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
        document.getElementById("services-2-img").src="images/services/osha.jpg";
        document.getElementById("services-3-img").src="images/services/cs.jpg";
    }
});

$(document).ready(function(){
  $("#input-search-main").keyup(function(e){
    if(e.keyCode == 13)
    {
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        window.open(window.location.href.substring(0, i) + "/training.html?search=" + this.value);
    }
  });
});
