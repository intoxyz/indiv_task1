$(document).ready(function(){

    alert("Navigate and Click on Pictures");

    $("#nametag").click(function(event){

        alert("wkwak@andrew.cmu.edu");
        event.preventDefault();
        $(this).hide("slow");
        $(".show").hide("4000");
    });

    //When mouse rolls over
    $("#Goods_Scroll").mouseover(function(){
        //alert("View Detailed Image");
        $.ajax({
                type: "GET",
                url: "./places/new.html",
                data: "",
                success: function (data) {
                $("#ajaxshow").html(data);
                //alert("success?");
                },
                error: function (XMLHttpRequest, status, errorThrown) {
                alert('ajax failure:' + status + ' error: ' + errorThrown);
                }
        });
    });

    /*
    //When mouse is removed
    $("Goods_Img").mouseout(function(){
        $(this).stop().animate({height:'40px'},{queue:false, duration:600, easing: 'easeOutBounce'})
    });
    */

});
