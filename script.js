var ab1;
var ab2;
$(".intro").hide();
$(".character-choosing").hide();
$(".choose1").hide();
$(".option1").hide();
$(".option2").hide();
$(".option1-1").hide();
$(".option1-2").hide();
$(".option2-1").hide();
$(".option2-2").hide();
$(".bad-ending").hide();
$(".good-ending").hide();
$("#gc").hide();

$(".start").click(function() {
   $(".start").hide();
   $(".title").hide();
   $(".character-choosing").show();
   $(".castle").hide();
});
$("#cauw").click(function() {
    ab1= "dagger-throw";
    ab2= "knife-attack";
   $(".character-choosing").hide();
   $(".intro").show();
    
});
$("#alusni").click(function() {
   ab1= "defensive-shield";
   ab2= "staff-blast";
   $(".character-choosing").hide();
   $(".intro").show();
    
});
$("#parry").click(function() {
   ab1= "parry";
   ab2= "sword-strike";
   $(".character-choosing").hide();
   $(".intro").show();
    
});

$("#cont1").click(function() {
    $(".intro").hide();
    $(".choose1").fadeIn();
        });
$("#1").click(function() {
    $(".choose1").hide();
    $(".option1").fadeIn();
      });
$("#2").click(function() {
    $(".choose1").hide();
    $(".option2").fadeIn();
});
$("#1-1").click(function() {
    $(".option1").hide();
    $(".option1-1").show();
});
$("#1-2").click(function() {
    $(".option1").hide();
    $(".option1-2").show();
    $("#a1").text(ab1);
    $("#a2").text(ab2);
});
$("#2-1").click(function() {
    $(".option2").hide();
    $(".option2-1").slideDown();
});
$("#2-2").click(function() {
    $(".option2").hide();
    $(".option2-2").slideDown();
});
$("#restart1").click(function() {
    $(".option2-1").hide();
    $(".title").show();
    $(".castle").show();
    $(".start").show();
});
$("#restart2").click(function() {
    $(".option2-2").hide();
    $(".title").show();
    $(".castle").show();
    $(".start").show();
});
$("#restart3").click(function() {
    $(".option1-1").hide();
    $(".title").show();
    $(".castle").show();
    $(".start").show();
});
$("#a1").click(function() {
    
});
$("#a2").text(function() {
  });
$("#a1").click(function() {
    $(".option1-2").hide();
    $(".good-ending").slideDown();
});
$("#a2").click(function() {
    $(".option1-2").hide();
    $(".bad-ending").slideDown();
});
$("#restart4").click(function() {
    $(".good-ending").hide();
    $(".title").show();
    $(".castle").show();
    $(".start").show();
});
$("#restart5").click(function() {
    $(".bad-ending").hide();
    $(".title").show();
    $(".castle").show();
    $(".start").show();
});