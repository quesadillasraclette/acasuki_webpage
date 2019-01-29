//$(".selector").toggleClass(className)
//$(".selector").addClass(className)
//$(".selector").removeClass([className])

//buttons
var happyButton = $(".btn-happy");
var catButton = $(".btn-cat");
var oneButton = $(".btn-180");
var grabButton = $(".btn-grab");

oneButton.click(function() {
  console.log("lalal");
  $("#oneimage").attr("src", "images_tricks/180.gif");
});

grabButton.click(function() {
  console.log("lalal");
  $("#oneimage").attr("src", "images_tricks/grab.gif");
});

happyButton.click(function() {
  $("#oneimage").attr("src", "images_tricks/mike.gif");
});

catButton.click(function() {
  console.log("lalal");
  $("#oneimage").attr("src", "images_tricks/cat.gif");
});
