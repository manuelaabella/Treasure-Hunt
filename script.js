$(document).ready(function() 
{$(".hiddenPic").hide();
$(".hiddenPictwo").hide();
$(".hiddenPicthree").hide();
$(".hiddenPicfour").hide();
$(".hiddenPicfive").hide();
});

$(".button").click(function(){
    $(".secretMessage").append("oh no! theres a fire drill double click here to find Delancy");
    $(".hiddenPictwo").show();
    $(".button").hide();
});
$(".secretMessage").dblclick(function(){
    $(".hiddenPic").show();
    $(".hiddenPictwo").hide();
    $(".secretMessage").text("Touch the castle to go find the magical crown HURRY!!");
});
$(".hiddenPic").hover(function(){
    $(".secretMessage").text("Nice job. we are so close but the safe has a password don't worry its the name of the country ");
     $(".hiddenPic").hide();
     $(".hiddenPicthree").show();
     $(".hiddenPicfour").hide();
});
$(".one").click(function(){
    $("body").css("background", "plum");
    $(".cool").hide();
    $(".secretMessage").hide();
    $(".hiddenPicthree").hide();
    $(".hiddenPicfour").fadeToggle();
    $(".secretMessage3").text(" yay!!! we found the crown time to party hover over Blair");
    
});

$(".hiddenPicfour").hover(function(){
    $("body").css("background", "purple");
    $(".secretMessage3").hide();
    $(".hiddenPicfour").hide();
    $(".hiddenPicfive").show();
    $(".secretMessage4").text("thank you for helping us get blair the throne of Gardania!!");
    $(".one").hide();
     
});






