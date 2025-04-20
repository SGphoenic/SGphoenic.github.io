/*jshint esversion: 6 */
function openTab(evt, tabName)
{
    var i, tabcontent, tablinks;
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