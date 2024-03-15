var divClassName; //lead form class
var preScrollTop;
var divpos;
var sticky;
$(function(){
    $(".dropdown-trigger").on("click",function(){
        $("#dropdown1").slideToggle();
    });
});
(function ($) {
    $(function () {
        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
        $('select').formSelect();
    });
})(jQuery);
$(document).ready(function () {
    $('.modal').modal();
    $('select').formSelect();
    $("#close").click(function () {
        $("#modal1").fadeOut(50);
        $(".modal-overlay").fadeOut(500);
    })
    $("#applyClick").click(function () {
        $(".modal-overlay").fadeIn(100);
        $("#modal1").show(50);
        $('body ,html').css('overflow', 'auto');
    }) 
    // $('.modal').modal();  
    //lead form scrolling
    window.onscroll = stickymenu.bind(this);
    //window.addEventListener('scroll', stickymenu);
    window.addEventListener('scroll', handleScroll);
    divClassName = "col m12 l12 visa-enq-row leadformsticky";
    $('#stickydiv').removeClass();
    $('#stickydiv').addClass(divClassName);
    leadformpos();
    // sticky = document.getElementById("navbar").offset().top;
    var sectionIds = $('.tab-row .tab a');

    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
    collapsibleFunction('.faqs-list.collapsible');
    $('#tabsdiv.collapsible .option-list').click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".collapsible-body").slideUp();
        } else {
            $(`#tabsdiv.collapsible .collapsible-body`).slideUp();
            $('#tabsdiv.collapsible .option-list.active').removeClass("active");
            $(this).addClass("active").find(".collapsible-body").slideDown();
        }
        return false;
    });

});
collapsibleFunction = (target) => {
    $(`${target} > li`).click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".collapsible-body").slideUp();
        } else {
            $(`${target} .collapsible-body`).slideUp();
            $(`${target} > li.active`).removeClass("active");
            $(this).addClass("active").find(".collapsible-body").slideDown();
            $(this).find(".more").hide();
        }
        return false;
    });
}
leadformpos = () => {
    var divpostop = document.getElementById("stickydiv").getBoundingClientRect();
    divpos = divpostop.top + window.scrollY - 79;
}
handleScroll = (event) => {

    if ((window.scrollY) < divpos) {
        divClassName = "col m12 l12 visa-enq-row leadformsticky";
    } else {
        divClassName = window.scrollY > (preScrollTop) ? "col m12 l12 visa-enq-row leadformsticky dvbtm" : (window.innerHeight < 726) ? "col m12 l12 visa-enq-row leadformsticky dvtop " : "col m12 l12 visa-enq-row leadformsticky dvbtm ";
    }
    $('#stickydiv').removeClass();
    $('#stickydiv').addClass(divClassName);
    preScrollTop = window.scrollY;

};
stickymenu = () => {
    if (window.scrollY >= sticky) {
        $("#navbar").addClass("sticky")
    } else {
        $("#navbar").removeClass("sticky");
    }
}