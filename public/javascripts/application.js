$(document).ready(function(){

    alert("Navigate and Click on Pictures");

/*    $("#nametag").click(function(event){

        alert("wkwak@andrew.cmu.edu");
        event.preventDefault();
        $(this).hide("slow");
        $(".show").hide("4000");
    });
*/

    //When mouse rolls over
    $("#Goods_Scroll").mouseover(function(){
        //alert("View Detailed Image");
        callAjax();
    });

    function callAjax(){

        $.ajax({
                type: "GET",
                url: "./places/new.html",
                data: "",
                success: function (data) {
                $("#ajaxshow").html(data);
                //alert("success?");
                },
                error: function () {
                alert('ajax failure:');
                }
        });
/*
        var idcheck = $(".Goods_Img").load();
        $("div.Goods_Img").text("parameter:"+idcheck);
        $.ajax({
                type: "POST",
                url: "./places/new.html",
                data: idcheck,
                success: function (data) {
                $("#ajaxshow").html(data);
                alert("success?");
                },
                error: function () {
                alert('ajax failure:');
                }
        });
*/
    }

});
