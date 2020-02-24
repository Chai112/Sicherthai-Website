var services_pos = 0

var services_1_title = "Process Safety Management"
var services_2_title = "Hazourdous Material Safety"
var services_3_title = "Emergency Response"
var services_4_title = "Distribution Safety"
var services_5_title = "Occupational Health and Safety Management"
var services_6_title = "Construction Safety"

var services_1_txt = "Sicher provides effective safety consulting programs for individuals and whole organizations in Process Safety Management, Hazardous Material Controls, Distribution Safety of Dangerous Goods, Crisis Management and Emergency Response as well as Occupational Health and Safety."
var services_2_txt = "Sicher provides training, consultancy, and field inspections of the Hazardous Area Classification and Electrical Selections and Electrical Safety training and technical inspections based on international standards like National Fire Protection Associations (NFPA) 70E, National Electrical Code (NEC), International Electrotechnical Commission (IEC) and other."
var services_3_txt = "the Promotion for Scientific and Technological Professions Act, B.E, Sicher is only one of two companies has been nominated officially from the Thailand Council of Sciene and Technology Professionals to organize training and qualify for science professionals to produce, control and manage of chemical and hazardous materials."
var services_4_txt = "Both Thai and German expatriate trainers, we provide safety training and consulting to enhance safe transport, handling, and storage of Dangerous Goods (DG) and Hazardous Substances for bulk storage terminals and warehouses and road and marine transportation modes to comply with recognized transportation safety of international transportation safety standards such as ADR, IMDG ."
var services_5_txt = "With the official partner between Sicher and Robere & Associates Company (first approved partner in the Asia Pacific by the Chartered Quality Institute (CQI) and the International Register of Certified Auditors from the United Kingdoms), we provide training and consulting services for ISO 45001- Occupational Health and Safety Management System and ISO 3100 Risk Management System."
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
    $("#b-1").click(function(){
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        if (services_pos === 0)
        {
            window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 1;
        }
        else
        {
            window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 4;
        }
    });
    $("#b-2").click(function(){
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        if (services_pos === 0)
        {
            window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 2;
        }
        else
        {
            window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 5;
        }
    });
    $("#b-3").click(function(){
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        if (services_pos === 0)
        {
            window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 3;
        }
        else
        {
            window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 6;
        }
    });
});
