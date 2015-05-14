//PORTFOLIO

//problem:user clicks on image, it goes to dead end.
//solution: create an overlay with the large image (Lightbox)

var $overlay= $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// an image to overlay
$overlay.append($image);


  // a caption
$overlay.append($caption);


// add overlay
$("body").append($overlay);


// capture the click event on a link to an image
$("#gallery a").click(function(event){
  event.preventDefault(); 
  var imageLocation=$(this).attr("href");
  // update the overlay with the linked image
 $image.attr("src",imageLocation);
  // show the overlay
  $overlay.show("fast");
  
  // get child's alt attributes and set caption
  var captionText=$(this).children("img").attr("alt");
  $caption.text(captionText);
  
});

// when user clicks overlay
$overlay.click(function(){
  // hide the overlay
  $overlay.hide("fast");
});

//MOBILE MENU

//problem the menu looks terrible on  mobile device
//solution hide the text links and replace them with a drop down menu

// //createa select and append to menu
// var $select = $("<select></select>");
// $("#menu").append($select);
// //cycle over menu links
// $("#menu a").each(function(){
//   var $anchor = $(this);
//   //create an option
//   var $option = $("<option></option>");
//   //options value is the href
//  $option.val($anchor.attr("href"));
//   //options text is the text of the link
//   $option.text($anchor.text());
//   //append option to select
//   $select.append($option);
// });

// ////create a button 
// //var $button=$("<button>Go</button>");
// //$("#menu").append($button);

//   //blind click to button
//   $select.change(function(){
//   //go to select's location
//   window.location=$select.val();
//   });
                
// //modify css to hide links on small width and show button and select
//   //modify css to hide select and button on larger width



  