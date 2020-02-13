var url = "https://sicher.000webhostapp.com/?id=";
var id = "aaa";
var q = "q";

url = url + id;
url = url + "&q="
url = url + q;

var items = [];
var category = null;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function search(query, list)
{
    document.getElementById("input-search-main").value = query;
    var list_out = [];
    for (var i = 0; i < list.length; i++)
    {
        var item = list[i];
        var score = 0;
        for (j = 0; j < item.name.length; j++)
        {
            for (k = 0; k < query.length; k++)
            {
                if(item.name.substring(j, j+1).toUpperCase() === query.substring(k, k+1).toUpperCase())
                {
                    score++;
                }
                else
                {
                    break;
                }
            }
        }
        if (score > 0)
        {
            item.score = score;
            list_out[list_out.length] = item;
        }
    }
    list_out.sort(function(a,b){if(a.score>b.score) {return 1;} if (b.score>a.score) {return -1;}return 0;});
    return list_out;
}

function report(item)
{
    item.name = item.name.replace(/_/g, " ");

    items[items.length] = item;
}

function draw(item)
{
    $("#out-title").text(item.name);
    $("#out-txt").text(item.location + ", " + item.price + " THB");
    img_name = ""
    // type juggling
    if (item.category == 1) {img_name = "psm"}
    if (item.category == 2) {img_name = "hazmat"}
    if (item.category == 3) {img_name = "emergency-response"}
    if (item.category == 4) {img_name = "ds"}
    if (item.category == 5) {img_name = "osha"}
    if (item.category == 6) {img_name = "cs"}
    document.getElementById("out-img").src = "images/services/" + img_name + ".jpg"
    var out = document.getElementById("out").cloneNode(true);

    w = window.location.href;
    i = window.location.href.length;
    while (window.location.href[i] != '/')
    {
        i--;
    }
    $(out).click(function() {window.open(window.location.href.substring(0, i) + "/t-page.html?p=" + item.id);});
    document.getElementById("list").appendChild(out);
}

function run() {
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

            document.getElementById("input-search-main").value = "";
            search_query = getParameterByName("search");
            category = getParameterByName("category");
            if (search_query != null && search_query != "")
            {
                items = search(search_query, items);
            }

            for (k = 0; k < items.length; k++)
            {
                if (category != null)
                {
                    if (category === items[k].category)
                    {
                        draw(items[k]);
                    }
                }
                else
                {
                    draw(items[k]);
                }
            }
            document.getElementById("out").style="display:none";
        }
    );
}

$(document).ready(function(){
  $("#input-search-main").keyup(function(e){
    if(e.keyCode == 13)
    {
    }
  });
    $("#c-1").click(function(){category = 1;
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 1;
    });
    $("#c-2").click(function(){category = 1;
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 2;
    });
    $("#c-3").click(function(){category = 1;
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 3;
    });
    $("#c-4").click(function(){category = 1;
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 4;
    });
    $("#c-5").click(function(){category = 1;
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 5;
    });
    $("#c-6").click(function(){category = 1;
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        window.location.href = window.location.href.substring(0, i) + "/training.html?category=" + 6;
    });
    $("#c-a").click(function(){category = 1;
        w = window.location.href;
        i = window.location.href.length;
        while (window.location.href[i] != '/')
        {
            i--;
        }
        window.location.href = window.location.href.substring(0, i) + "/training.html";
    });
    
});

// We'll run the AJAX query when the page loads.
//$("#out").text("Connecting...");
window.onload=run;
