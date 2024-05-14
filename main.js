//------------------------ Blur the hero Image on hover of navigation bar -----------------------

const loungeimage = document.getElementById("backgroundimage");
const navcontainer = document.getElementById("navcontainer");

navcontainer.addEventListener("mouseover", function() {
    loungeimage.style.filter = "blur(5px)";
});

navcontainer.addEventListener("mouseout", function() {
    loungeimage.style.filter = "blur(0px)";
});


// ----------------------------------- Zoom the hero image and show product on hovering near a product --------------------------------


const ripple1 = document.getElementById("ripple1");
const ripple2 = document.getElementById("ripple2");
const closelabel = document.getElementById("close");

const product = document.getElementById("productimage");
const ripples = document.querySelectorAll('.ripple-effect');


closelabel.addEventListener("click", function(){
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "47.3% 59.5%";
  loungeimage.style.filter= "blur(0px)";
  product.style.display = "none";
  for (const ripple of ripples) {
    ripple.style.display = "block";
  }
  closelabel.style.display = "none";
  closelabel.style.transform = "translateY(0px)  translateX(0px)" ;
  product.style.padding = "0px 0px"
});


product.addEventListener("mouseout", function(){
  //On hovering outside a product image, the image should disappear
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "47.3% 59.5%";
  loungeimage.style.filter= "blur(0px)";
  product.style.display = "none";
  for (const ripple of ripples) {
    ripple.style.display = "block";
  }
  closelabel.style.display = "none";
  closelabel.style.transform = "translateY(0px)  translateX(0px)" ;
  product.style.padding = "0px 0px"
});



/*------------------------ Product 1 ------------------------------- */
ripple1.addEventListener("mouseover", function() {
  product.style.display = "block";
  product.src = "./img/Product_Images/Von Vene Kansas.jpeg";
  product.onload = function(){
    const imageHeight = product.naturalHeight;
    const imageWidth = product.naturalWidth;
    const aspectratio = imageWidth/imageHeight;
    product.style.aspectRatio = "" + aspectratio;
  
    const screenWidth = window.innerWidth; // Get screen width in pixels
    const screenHeight = window.innerHeight;
    const desiredPercentage = 70; // Desired percentage of screen width (Product Image width)
    const actualimageWidth = (screenWidth * desiredPercentage) / 100;
    const actualimageHeight = (screenHeight * desiredPercentage) / 100;
    product.style.padding =  `${imageWidth/ (aspectratio * 40)}px ${imageHeight * aspectratio /40}px`;
    
    var currentimageheight = imageHeight * actualimageWidth/imageWidth;
    var currentimageheight = imageHeight * actualimageHeight/imageHeight;
  
    closelabel.style.display = "block";
    closelabel.style.transform = `translateX(${-0.5 - ((imageWidth/actualimageWidth)*2.4)}vw) translateY(${-((actualimageHeight/2.1))}px)` ;
  
    for (const ripple of ripples) {
      ripple.style.display = "none";
    }
    loungeimage.style.transform = "scale(2)";
    loungeimage.style.transformOrigin = "47.3% 59.5%";
    loungeimage.style.filter= "blur(5px)";
  
    
    
  };
  
});

/*------------------------ Product 2 ------------------------------- */
ripple2.addEventListener("mouseover", function() {
  product.style.display = "block";
  product.src = "./img/Product_Images/Von Vene Fuente.jpeg";
  product.onload = function(){
    const imageHeight = product.naturalHeight;
    const imageWidth = product.naturalWidth;
    const aspectratio = imageWidth/imageHeight;
    product.style.aspectRatio = "" + aspectratio;
  
    const screenWidth = window.innerWidth; // Get screen width in pixels
    const screenHeight = window.innerHeight;
    const desiredPercentage = 70; // Desired percentage of screen width (Product Image width)
    const actualimageWidth = (screenWidth * desiredPercentage) / 100;
    const actualimageHeight = (screenHeight * desiredPercentage) / 100;
    product.style.padding =  `${imageWidth/ (aspectratio * 40)}px ${imageHeight * aspectratio /40}px`;
    
    var currentimageheight = imageHeight * actualimageWidth/imageWidth;
    var currentimageheight = imageHeight * actualimageHeight/imageHeight;
  
    closelabel.style.display = "block";
    closelabel.style.transform = `translateX(${-0.5 - ((imageWidth/actualimageWidth)*2.4)}vw) translateY(${-((actualimageHeight/2.1))}px)` ;
    
    for (const ripple of ripples) {
      ripple.style.display = "none";
    }
    loungeimage.style.transform = "scale(2)";
    loungeimage.style.transformOrigin = "47.3% 59.5%";
    loungeimage.style.filter= "blur(5px)";
  
    
    
  };
  
});




//--------------------------- Search Bar --------------------------------------
const searchInput = document.getElementById("search-input");
const searchForm = document.querySelector("form");

// Blinking Cursor on clicking search bar
searchInput.addEventListener("click", function() {
  // Remove placeholder text on click
  this.placeholder = "";
  // Set focus to show blinking cursor
  this.focus();
});

//Submit form on clicking Enter Key
searchInput.addEventListener("keypress", function(event) {
  if (event.key === 'Enter') { // Enter key code
    // Your custom logic before form submission (optional)
    searchForm.submit(); // Submit the form
  }
});
//--------------------------- Search Bar End -------------------------------