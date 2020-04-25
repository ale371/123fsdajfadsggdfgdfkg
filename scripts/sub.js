$(document).ready(function()
        {


    $("#show_div").mouseover(function() { $("#sub_menu").css('display','list-item'); });
    $("#show_div").mouseout(function() { $("#sub_menu").css('display','none'); });


        })


$(document).ready(function()
        {


    $("#show_div1").mouseover(function() { $("#sub_menu1").css('display','list-item'); });
    $("#show_div1").mouseout(function() { $("#sub_menu1").css('display','none'); });


        })




function subMenu3(show) {
if (show){
document.getElementById('sub_menu3').style.display = 'list-item';
} else {
document.getElementById('sub_menu3').style.display = 'none';
}
}