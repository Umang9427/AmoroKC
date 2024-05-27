//------------------------------ Defining Global Variables ------------------------------------
const cartvalue = document.getElementById("cartquantity");



//---------------------------------- Mobile Navigation Bar --------------------------------------
function openNav() {
  document.getElementById("mobilemenu").style.height = "100%";
  document.getElementById("closehamburgericon").style.display = "block";
}

function closeNav() {
  document.getElementById("mobilemenu").style.height = "0%";
  document.getElementById("closehamburgericon").style.display = "none";
}


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

// Declaring global variables

var mobile = 0;

if (window.innerWidth / window.innerHeight <= 3/4)
  {
    mobile = 1;
  }



const closelabel = document.getElementById("close");
const product = document.getElementById("productimage");
const productcontainer = document.getElementById("productpagecontainer");
const productlabel = document.getElementById("productlabel");
const ripples = document.querySelectorAll('.ripple-effect');
var blackBox = document.getElementById('textboxcontainer');
const prevbutton = document.getElementById('prevroomcontainer');
var isHoveringProduct = 0;
var isHoveringBlackbox = 0;

const ripple1 = document.getElementById("ripple1");
const ripple2 = document.getElementById("ripple2");
const ripple3 = document.getElementById("ripple3");
const ripple4 = document.getElementById("ripple4");
const ripple5 = document.getElementById("ripple5");
const ripple6 = document.getElementById("ripple6");
const ripple7 = document.getElementById("ripple7");
const ripple8 = document.getElementById("ripple8");
const ripple9 = document.getElementById("ripple9");
const ripple10 = document.getElementById("ripple10");
const ripple11 = document.getElementById("ripple11");
const ripple12 = document.getElementById("ripple12");
const ripple13 = document.getElementById("ripple13");
const ripple14 = document.getElementById("ripple14");

//function for closing the product popup
function handleclose(){
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = `${top}px ${left}px`;
  loungeimage.style.filter= "blur(0px)";
  
  product.style.display = "none";
  
  for (const ripple of ripples) {
    ripple.style.display = "block";
  }
  closelabel.style.display = "none";
  product.style.padding = "0px 0px";
  product.style.transform = "0px 0px";
  
  blackBox.style.display = "none";
  prevbutton.style.display = "flex";
}

//function to add some conditions before closing
function conditionalhandleclose(){
 
  document.addEventListener('mousemove', function(){
    const rect1 = product.getBoundingClientRect();
    const rect2 = blackBox.getBoundingClientRect();
    if (
        event.clientX < rect1.left ||
        event.clientX > rect2.right ||
        event.clientY > rect2.bottom ||
        event.clientY < rect2.top
      ) {handleclose();
    
    
      }
    });
}

//Closing the product page, when it is clicked outside the product page
document.addEventListener('click', function(){
  const rect1 = product.getBoundingClientRect();
  const rect2 = blackBox.getBoundingClientRect();
  if (
      event.clientX < rect1.left ||
      event.clientX > rect2.right ||
      event.clientY > rect2.bottom ||
      event.clientY < rect2.top
    ) {handleclose();}
  });

//function to set product postion
function setproductposition(){
  if (mobile === 0){
    productcontainer.style.transform = "translate(calc(-50% - 17.5vw), -50%)";
  }
  else if (mobile === 1){
    productcontainer.style.transform = "translate(-50%, calc(-50% - 27.5vh))";
  }
  
}

//function to set text box postion
function blackBoxposition(width, height){

  if (mobile === 0){
  
    blackBox.style.height = `${height}px`;
    blackBox.style.top = "0px";
    blackBox.style.transform = `translateX(${width}px)`;
  }

  else if (mobile === 1){
    blackBox.style.left = "0%";
    blackBox.style.top = "99%";
    blackBox.style.width = `${width}px`;
    const rect = blackBox.getBoundingClientRect();
    const screenHeight = screen.availHeight;
    var blackboxheight = (screenHeight - rect.top) * 0.7; //Get the blackbox height to reach until the bottom of screen. Then decrease 10% of it 
    blackBox.style.height = `${blackboxheight}px`;
    blackBox.style.transform = `translateX(0px)`;
  }
}

//function to get actual image dimensions
function getactualimagedimensions(ratioaspect){
  const screenWidth = screen.availWidth; // Get screen width in pixels
  const screenHeight = screen.availHeight; // Get screen Height in pixels
  
  var height;
  var width;
  if(mobile === 0){
    height =  (screenHeight * 0.65) ;
    width = height * ratioaspect;
    if(width > screenWidth * 0.55){
      width = screenWidth * 0.55;
      height = width / ratioaspect;
    }
  }
  else if (mobile === 1){
    height =  (screenHeight * 0.55) ;
    width = height * ratioaspect;
    if(width > screenWidth * 0.9){
      width = screenWidth * 0.9;
      height = width / ratioaspect;
    }
  }

  
  return [width, height];
}

//function to make product pop up
function showproduct(imgsrc, top, left){
  product.style.display = "block";
  product.src = imgsrc;
  product.onload = function(){
    const imageHeight = product.naturalHeight;
    const imageWidth = product.naturalWidth;
    const aspectratio = imageWidth/imageHeight;
    var actualimageWidth;
    var actualimageHeight;
  
    [actualimageWidth, actualimageHeight] = getactualimagedimensions(aspectratio);

    product.style.width = `${actualimageWidth}px`;
    product.style.height = `${actualimageHeight}px`;
    setproductposition();
    
    closelabel.style.display = "block";
    blackBox.style.display = "block";
    
    blackBoxposition(actualimageWidth, actualimageHeight); //Get blackboxposition based on different screen sizes.

    for (const ripple of ripples) {
      ripple.style.display = "none";
    }
    loungeimage.style.transform = "scale(2)";
    loungeimage.style.transformOrigin = `${top}px ${left}px`;
    loungeimage.style.filter= "blur(5px)";
    prevbutton.style.display = "none";
    
    product.style.display = "inline-block"; /* Somehow, display:none gets activated. I am adding this again */
    closelabel.addEventListener("click", handleclose);
      
    //Creating mouse leave events. The mouse should have entered once for it to work.
    product.addEventListener("mouseover", () => {
      if (isHoveringProduct < 1){
        isHoveringProduct = isHoveringProduct + 1;
        }
    });

    product.addEventListener("mouseleave", () => {
      if (isHoveringProduct < 2){
        isHoveringProduct = isHoveringProduct + 1;
      }
      rect1 = product.getBoundingClientRect();
      if ((isHoveringBlackbox === 2 || isHoveringProduct === 2) && event.clientX < rect1.right){
        isHoveringProduct = 0;
        isHoveringBlackbox = 0;
        handleclose();
      }
    });

    blackBox.addEventListener("mouseover", () => {
      if (isHoveringBlackbox < 1){
      isHoveringBlackbox = isHoveringBlackbox + 1;
      }
    });
  
    blackBox.addEventListener("mouseleave", () => {
      if (isHoveringBlackbox < 2){
        isHoveringBlackbox = isHoveringBlackbox + 1;
      }
      rect2 = blackBox.getBoundingClientRect();
      if ((isHoveringBlackbox === 2 || isHoveringProduct === 2) && event.clientX > rect2.left){
        isHoveringProduct = 0;
        isHoveringBlackbox = 0;
        handleclose();
      }
    });
};
}


//Declaring the Variables
const productname = document.getElementById ('productname');
const productprice = document.getElementById ('productprice');
const productdetails = document.getElementById ('productdetails');

/*------------------------ Product 1 ------------------------------- */
ripple1.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Kansas";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `DOS: Von, Vene, Ricardo, Tyree, Nicole Von + Love &#38; Co.<br>
  Kansas: Birthplace<br>
  Color: Sage for Growth<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple1.getBoundingClientRect(); //Ensuring correct transform origin for scale transition of background image
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  
  showproduct(imgsrc= "./img/Product_Images/Von Vene Kansas.webp", top=circleCenterX, left=circleCenterY);
});
ripple1.addEventListener("click", function() {
  productname.textContent = "Von Vene Kansas";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `DOS: Von, Vene, Ricardo, Tyree, Nicole Von + Love &#38; Co.<br>
  Kansas: Birthplace<br>
  Color: Sage for Growth<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple1.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Von Vene Kansas.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 2 ------------------------------- */
ripple2.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Fuente";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `Tres: Birthday Month and Third Born <br>
  Fuente: Source and Von's Favourite Cigar
  Color: Sand for the Earth<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple2.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Von Vene Fuente.webp", top=circleCenterX, left=circleCenterY);
});

ripple2.addEventListener("click", function() {
  productname.textContent = "Von Vene Fuente";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `Tres: Birthday Month and Third Born<br>
  Fuente: Source and Von's Favourite Cigar <br>
  Color: Sand for the Earth<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple2.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Von Vene Fuente.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 4 ------------------------------- */
ripple4.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Laguna";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `Laguna: Emerald Bay &#38; Fisherman's Cove is my happy place. 
  The dream is to move my family <br>
  Color: White for peace and surrender<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple4.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Von Vene Laguna.webp", top=circleCenterX, left=circleCenterY);
});

ripple4.addEventListener("click", function() {
  productname.textContent = "Von Vene Laguna";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `Laguna: Emerald Bay &#38; Fisherman's Cove is my happy place. 
  The dream is to move my family <br>
  Color: White for peace and surrender<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple4.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
 
  showproduct(imgsrc= "./img/Product_Images/Von Vene Laguna.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 5 ------------------------------- */
ripple5.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Shirley";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `Uno: Mother  &#38; the first candle maker <br>
  Color: Cream for her beautiful smooth soul<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple5.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Von Vene Shirley.webp", top=circleCenterX, left=circleCenterY);
});

ripple5.addEventListener("click", function() {
  productname.textContent = "Von Vene Shirley";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `Uno: Mother  &#38; the first candle maker <br>
  Color: Cream for her beautiful smooth soul<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple5.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Von Vene Shirley.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 6 ------------------------------- */
ripple6.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Buds";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `The Earbuds comes with their own custom case. <br>
  Features: 2 hours of playback time, universally comfortable fit<br>
  and built-in controls<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple6.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Von Vene Buds.webp", top=circleCenterX, left=circleCenterY);
});

ripple6.addEventListener("click", function() {
  productname.textContent = "Von Vene Buds";
  productprice.textContent = "$64.99";
  productdetails.innerHTML = `The Earbuds comes with their own custom case. <br>
  Features: 2 hours of playback time, universally comfortable fit<br>
  and built-in controls<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple6.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Von Vene Buds.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 7 ------------------------------- */
ripple7.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Bottle";
  productprice.textContent = "$30.48";
  productdetails.innerHTML = `The bottle's Double-wall construction allows hot liquids to stay hot for upto 12 hours
   while colder choices can last full 48 hours.<br>
   Stainless steel sides resist scratch and fade<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple7.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/WaterBottle.webp", top=circleCenterX, left=circleCenterY);
});

ripple7.addEventListener("click", function() {
  productname.textContent = "Von Vene Bottle";
  productprice.textContent = "$30.48";
  productdetails.innerHTML = `The bottle's Double-wall construction allows hot liquids to stay hot for upto 12 hours
  while colder choices can last full 48 hours.<br>
  Stainless steel sides resist scratch and fade<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple7.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/WaterBottle.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 8 ------------------------------- */
ripple8.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Ceramic Mug";
  productprice.textContent = "$12.99";
  productdetails.innerHTML = `BPA and Lead-free, microwave & dishwasher-safe,
   and made of durable white ceramic in 11-ounce and 15-ounce sizes. 
   The perfect gift for coffee, tea, and chocolate lovers<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple8.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Mug.webp", top=circleCenterX, left=circleCenterY);
});

ripple8.addEventListener("click", function() {
  productname.textContent = "Von Vene Ceramic Mug";
  productprice.textContent = "$12.99";
  productdetails.innerHTML = `BPA and Lead-free, microwave & dishwasher-safe,
  and made of durable white ceramic in 11-ounce and 15-ounce sizes. 
  The perfect gift for coffee, tea, and chocolate lovers<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple8.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Mug.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 9 ------------------------------- */
ripple9.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Sherpa Blanket";
  productprice.textContent = "$104.99";
  productdetails.innerHTML = `The Hooded fleece blanket is made with 100% supremely soft polyester.
  It delivers fuzzy warmth during winters. Its cream-colored hood brings extra style points to your comfort<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple9.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Blanket.webp", top=circleCenterX, left=circleCenterY);
});

ripple9.addEventListener("click", function() {
  productname.textContent = "Von Vene Sherpa Blanket";
  productprice.textContent = "$104.99";
  productdetails.innerHTML = `The Hooded fleece blanket is made with 100% supremely soft polyester.
  It delivers fuzzy warmth during winters. Its cream-colored hood brings extra style points to your comfort<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple9.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Blanket.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 10 ------------------------------- */
ripple10.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Suitcase";
  productprice.textContent = "$299.99";
  productdetails.innerHTML = `Comes with adjustable handle, 360 degree swivel wheels<br> and a safety lock. 
  Available in multiple sizes to accommodate your needs<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple10.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Suitcase.webp", top=circleCenterX, left=circleCenterY);
});

ripple10.addEventListener("click", function() {
  productname.textContent = "Von Vene Suitcase";
  productprice.textContent = "$299.99";
  productdetails.innerHTML = `Comes with adjustable handle, 360 degree swivel wheels<br> and a safety lock. 
  Available in multiple sizes to accommodate your needs<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple10.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;

  showproduct(imgsrc= "./img/Product_Images/Suitcase.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 11 ------------------------------- */
ripple11.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Beach Towel";
  productprice.textContent = "$88.99";
  productdetails.innerHTML = `Made with 100% soft polyester, these beach cloths come in a big size of 38" x 81".<br>
  Perfect take-alongs for all your excursions<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple11.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Beach_towel.webp", top=circleCenterX, left=circleCenterY);
});

ripple11.addEventListener("click", function() {
  productname.textContent = "Von Vene Beach Towel";
  productprice.textContent = "$88.99";
  productdetails.innerHTML = `Made with 100% soft polyester, these beach cloths come in a big size of 38" x 81".<br>
  Perfect take-alongs for all your excursions<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple11.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Beach_towel.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 12 ------------------------------- */
ripple12.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Yoga Mat";
  productprice.textContent = "$50.77";
  productdetails.innerHTML = `Custom-printed rubber yoga mat with edge-to-edge printing in crisp detail.
  Featuring an anti-slip rubber bottom and a higher comfort factor with impact absorption<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple12.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/yoga_mat.webp", top=circleCenterX, left=circleCenterY);
});

ripple12.addEventListener("click", function() {
  productname.textContent = "Von Vene Yoga Mat";
  productprice.textContent = "$50.77";
  productdetails.innerHTML = `Custom-printed rubber yoga mat with edge-to-edge printing in crisp detail.
  Featuring an anti-slip rubber bottom and a higher comfort factor with impact absorption<span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple12.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/yoga_mat.webp", top=circleCenterX, left=circleCenterY);
});

/*------------------------ Product 13 ------------------------------- */
ripple13.addEventListener("mouseover", function() {
  productname.textContent = "Von Vene Unisex Tee";
  productprice.textContent = "$29.99";
  productdetails.innerHTML = `Comfort of cotton and durability of polyester. Each shirt comes with side seams 
  to stay new longterm, shoulder tapes that prevent stretching 
  and a ribbed knit collar <span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple13.getBoundingClientRect();  
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Small_Tshirt.webp", top=circleCenterX, left=circleCenterY);
});

ripple13.addEventListener("click", function() {
  productname.textContent = "Von Vene Unisex Tee";
  productprice.textContent = "$29.99";
  productdetails.innerHTML = `Comfort of cotton and durability of polyester. Each shirt comes with side seams 
  to stay new longterm, shoulder tapes that prevent stretching 
  and a ribbed knit collar <span onclick = "openProductPage()">...know more</span>`;

  const circleRect = ripple13.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  showproduct(imgsrc= "./img/Product_Images/Small_Tshirt.webp", top=circleCenterX, left=circleCenterY);
});



// ----------------------------------------------------------- End ---------------------------------------------------------------------


//------------------------------------ Product Quantity change ------------------------------------------------

const minusbutton = document.getElementById("minusbutton");
const plusbutton = document.getElementById("plusbutton");
const quantity = document.getElementById("currentquantity"); 
const addtocart = document.getElementById("addtocart");

minusbutton.addEventListener("click", function() {
  var number = parseFloat(quantity.textContent);
  if (number!=1){
    quantity.textContent = number-1;
  }
});

plusbutton.addEventListener("click", function() {
  var number = parseFloat(quantity.textContent);
  quantity.textContent = number+1;
  
});

addtocart.addEventListener("click", function() {
  var newquantity = parseFloat(quantity.textContent);
  increasecartvalue (newquantity);
  
});

function increasecartvalue(increment){
  var current = parseFloat(cartvalue.textContent);
  current = current + increment;
  cartvalue.textContent = current;
  cartvalue.style.display = "block";
  if (current == 0){
    cartvalue.style.display = "none"
  }
}

//------------------------------------------ Search Bar ----------------------------------------------------
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