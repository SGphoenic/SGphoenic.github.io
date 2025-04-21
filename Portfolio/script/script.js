/*jshint esversion: 6 */
function openTab(evt, tabName)
{
    var i, tabcontent, tabBtn;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }
    tabBtn = document.getElementsByClassName("tabBtn");
    for (i = 0; i < tabBtn.length; i++)
    {
        tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function toggleNav()
{
    var navOptions = document.getElementsByClassName("tabBtn");
    for (var i = 0; i < navOptions.length; i++)
    {
        if (navOptions[i].style.display == "none")
        {
            navOptions[i].style.display = "block";
        }
        else
        {
            if (navOptions[i].className.includes("active") == false)
            {
                navOptions[i].style.display = "none";
            }
        }
    }
}
if (window.innerWidth <= 540) { toggleNav(); }