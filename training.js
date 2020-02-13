var url = "https://sicher.000webhostapp.com/?id=";
var id = "aaa";
var q = "q";

url = url + id;
url = url + "&q="
url = url + q;

var items = [];

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
    for (var i = 1; i < list.length; i++)
    {
        var item = list[i];
        for (j = 0; j < item.name.length; j++)
        {
            if(item.name.substring(j, j+1).toUpperCase() === "A")
            {
                list_out[list_out.length] = item;
            }
        }
    }
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

            alert(items.length);
            search_query = getParameterByName("search");
            if (search_query != null)
            {
                items = search(search_query, items);
            }

            for (k = 0; k < items.length; k++)
            {
                draw(items[k]);
            }
            document.getElementById("out").style="display:none";
        }
    );
}

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
        window.location.href = window.location.href.substring(0, i) + "/training.html?search=" + this.value;
    }
  });
});

// We'll run the AJAX query when the page loads.
//$("#out").text("Connecting...");
window.onload=run;
