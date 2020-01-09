var os_clicked = false;
document.getElementById("btn-os").addEventListener("click", function()
{
    os_clicked = !os_clicked;
    if (os_clicked)
    {
        document.getElementById("btn-os").style.color = '#a33035';
        document.getElementById("sub-header").style.display = 'block';
    }
    else
    {
        document.getElementById("btn-os").style.color = 'black';
        document.getElementById("sub-header").style.display = 'none';
    }
});
document.getElementById("btn-menu").addEventListener("click", function()
{
    alert("A");
});
