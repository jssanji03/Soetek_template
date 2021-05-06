// deskTop Menu Control ///
$(function () {
    $("#menu-lg-toggle").click(function(e) {
    e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".dropdown-menu").removeClass("open");
        $(".has-menu").children().find(".fas").removeClass("fa-angle-up");
        $(".nav-item a").removeClass("changColor");
    });
});

// SideBar dropdown Control ///
$(function () {
    $(document).delegate('.nav-link', 'click', function (event) {
        $(this).toggleClass("changColor")
        $(this).parent().children(".dropdown-menu").toggleClass("open");
        $(this).parent().children().find(".fas").toggleClass("fa-angle-up");
        event.stopPropagation();
    })
});
$(function () {
    var pathname = window.location.pathname;
   $(".navbar-nav li a").each( function() {
        var href= $(this).attr("href");
        if (href != undefined && pathname.indexOf(href) >= 0){
            $(this).addClass("onPage");
            $(this).parents('.has-menu').children('.nav-link').addClass("active");
            $(this).filter('.nav-link').addClass("active");
            $(this).parents('.dropdown-menu').addClass("open");
        }
    });
});


// Laptop SideBar Control ///
$(function () {
    $(document).delegate('#menu-laptop-toggle', 'click', function(event) {
        $("#wrapper").addClass("openmenu");
        event.stopPropagation();
	})
    $(document).delegate('#page-content-wrapper', 'click', function(event) {
		$("#wrapper").removeClass("openmenu");
	})
    $(document).delegate('.dropdown-item', 'click', function(event) {
        $("#wrapper").removeClass("openmenu");
        event.stopPropagation();
	})
});

// Color SideBar Control ///
$(function () {
    $(document).delegate('#color-menu-toggle', 'click', function(event) {
        $("#color-sidebar").toggleClass("toggled");
	})
});

// Color  Control ///
$(function () {
    $(".dark-yellow").click(function () {
        $("#topNav").css("background-color","#fdd835");
        $("#sidebar-wrapper").css("background-color", "#343A40");
        $(".active").css("background-color", "#ffff6b");
        $(".active").css("color", "#000");
        $(".nav-link").not(".active").css("color", "#FFF");
        $(".side_logo img").attr("src","../public/img/logo.png");
	})
    $(".dark-brown").click(function() {
        $("#topNav").css("background-color","#d9d4cb");
        $("#sidebar-wrapper").css("background-color", "#773d23");
        $(".active").css("background-color", "#a9684c");
        $(".active").css("color","#FFF");
        $(".nav-link").css("color", "#FFF");
        $(".side_logo img").attr("src","../public/img/logo.png");
	})
    $(".dark-blue").click(function() {
        $("#topNav").css("background-color","#caf0f8");
        $("#sidebar-wrapper").css("background-color", "#0077b6");
        $(".active").css("background-color", "#023e8a");
        $(".active").css("color","#FFF");
        $(".nav-link").css("color", "#FFF");
        $(".side_logo img").attr("src","../public/img/logo.png");
    })
    $(".light-red").click(function() {
        $("#topNav").css("background-color","#8d99ae");
        $("#sidebar-wrapper").css("background-color", "#edf2f4");
        $(".active").css("background-color", "#ef233c");
        $(".active").css("color","#FFF");
        $(".nav-link").not(".active").css("color","#2b2d42");
        $(".side_logo img").attr("src","../public/img/logo-dark.png");
	})
    $(".light-purple").click(function() {
        $("#topNav").css("background-color","#8900f2");
        $("#sidebar-wrapper").css("background-color", "#e9ecef");
        $(".active").css("background-color", "#480ca8");
        $(".active").css("color","#FFF");
        $(".nav-link").not(".active").css("color", "#212529");
        $(".side_logo img").attr("src","../public/img/logo-dark.png");
	})
    $(".light-green").click(function() {
        $("#topNav").css("background-color","#80b918");
        $("#sidebar-wrapper").css("background-color", "#e9ecef");
        $(".active").css("background-color", "#1b5e20");
        $(".active").css("color","#FFF");
        $(".nav-link").not(".active").css("color", "#003300");
        $(".side_logo img").attr("src","../public/img/logo-dark.png");
	})
});







    
    
    
