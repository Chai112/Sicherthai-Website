var os_clicked = false;
document.getElementById("m-btn-os-ptr").style.display = 'none';
document.getElementById("m-btn-os-itr").style.display = 'none';
document.getElementById("m-btn-os-aud").style.display = 'none';
document.getElementById("m-btn-os-con").style.display = 'none';

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
document.getElementById("m-btn-os").addEventListener("click", function()
{
        document.getElementById("m-btn-os").style.display = 'none';
        document.getElementById("m-btn-abt").style.display = 'none';
        document.getElementById("m-btn-con").style.display = 'none';
        document.getElementById("m-btn-os-ptr").style.display = 'block';
        document.getElementById("m-btn-os-itr").style.display = 'block';
        document.getElementById("m-btn-os-aud").style.display = 'block';
        document.getElementById("m-btn-os-con").style.display = 'block';
});
document.getElementById("btn-menu").addEventListener("click", function()
{
    os_clicked = !os_clicked;
    if (os_clicked)
    {
        document.getElementById("btn-os").style.color = '#a33035';
        document.getElementById("m-header").style.display = 'block';
    }
    else
    {
        document.getElementById("btn-os").style.color = 'black';
        document.getElementById("m-header").style.display = 'none';
    }
});
