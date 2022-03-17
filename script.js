// Obtain the img element, and assign it to the image variable
let image = document.getElementById('pet')

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById('shrink-grow')
var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  if (clicks==5){location.href='haha.html'};
};
//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {


if (image.style.height != "150px") {
    image.style.height = "150px"
    image.style.width = 'auto'
  
  }
  else {
    image.style.height = "300px"
    image.style.width = 'auto'

  }
})
