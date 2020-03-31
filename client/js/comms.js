/*
var id = "aaa";
var q = "q";

url = url + id;
url = url + "&q="
url = url + q;

*/
const server_url = "https://sicher.000webhostapp.com/index.php";
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

class Connection
{
    constructor (url)
    {
       this.url = url;
    }

    query(query, handler)
    {   
        var request = this.url + "?";
        query.forEach(function(obj){
            request = request + obj.name+"="+obj.val+"&";
        });
        $.getJSON(
            request,
            function(data){
                handler(data);
        });
    }

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


// We'll run the AJAX query when the page loads.
//$("#out").text("Connecting...");
