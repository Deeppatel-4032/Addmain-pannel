$(document).ready(function(){

    //  $(".dropdown").click(function(){
    //      $(this).next(".dropdown-menu").slideToggle("fast");
    //     $(this).addClass("active");

    //      $(this).parent("li").siblings("li").children(".dropdown-menu").slideUp("fast");
    //      $(this).parent("li").siblings("li").children(".dropdown-menu").removeClass("active");
    //      $(this).removeClassClass("active");
    // })


    $(".dropdown").click(function(){

        $(".dropdown-menu").slideUp("3000");

        if($(this).parent().hasClass("active"))
        {
            $(".dropdown").parent().removeClass("active")
            $(this).parent().removeClass("active")
        }
        else
        {
            $(".list-items").removeClass("active")
            $(this).next(".dropdown-menu").slideDown("3000")
            $(this).parent().addClass("active")
        }
    });

    $("#side-collspe").click(function(){
        $(".side-header").toggleClass("close")
        $(".addmin-panel .side-bar h6 ").toggleClass("close")
        $(".addmin-panel .side-menu nav a h5").toggleClass("close")
        $(".arrow i").toggleClass("close")
        $(".side-header .Logoo").toggleClass("close")
        $(".main-bar").toggleClass("close")
        $(".main-header").toggleClass("close")
        $(".Fav").toggleClass("d-block")
    })

});
