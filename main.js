//Blur the hero Image on hover of navigation bar
const loungeimage = document.getElementById("loungeimage");
const navcontainer = document.getElementById("navcontainer");

navcontainer.addEventListener("mouseover", function() {
    loungeimage.style.filter = "blur(10px)";
});

navcontainer.addEventListener("mouseout", function() {
    loungeimage.style.filter = "blur(0px)";
});


// Zoom the image on hovering near a product

const productlabel = document.getElementById("productlabel");
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const product4 = document.getElementById("product4");
const product5 = document.getElementById("product5");
const product6 = document.getElementById("product6");
const product7 = document.getElementById("product7");
const product8 = document.getElementById("product8");
const circles = document.querySelectorAll('#circlecontainer')
const products = document.querySelectorAll('.product')

/*------------------------ Product 1 ------------------------------- */
product1.addEventListener("mouseover", function() {
  for (const circle of circles) {
    circle.style.display = "none";
  }
  loungeimage.style.transform = "scale(2)";
  loungeimage.style.transformOrigin = "47.3% 59.5%";
  for (const product of products) {
    const i=0;
    i=i+1;
    if (i==1){continue;}
    else{ product.style.display = "none"; }
    }
});

product1.addEventListener("mouseout", function() {
  for (const circle of circles) {
    circle.style.display = "block";
  }
  for (const product of products) {
    product.style.display = "block";
  }
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "47.3% 59.5%";
  
});


/*------------------------ Product 2 ------------------------------- */
product2.addEventListener("mouseover", function() {
  for (const circle of circles) {
    circle.style.display = "none";
  }
  loungeimage.style.transform = "scale(2)";
  loungeimage.style.transformOrigin = "54% 69.5%";
  for (const product of products) {
    const i=0;
    i=i+1;
    if (i==2){continue;}
    else{ product.style.display = "none"; }
    }
});

product2.addEventListener("mouseout", function() {
  for (const circle of circles) {
    circle.style.display = "block";
  }
  for (const product of products) {
    product.style.display = "block";
  }
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "54% 69.5%";
  
});

/*------------------------ Product 3 ------------------------------- */
product3.addEventListener("mouseover", function() {
  for (const circle of circles) {
    circle.style.display = "none";
  }
  loungeimage.style.transform = "scale(2)";
  loungeimage.style.transformOrigin = "58% 46%";
  for (const product of products) {
    const i=0;
    i=i+1;
    if (i==3){continue;}
    else{ product.style.display = "none"; }
    }
});

product3.addEventListener("mouseout", function() {
  for (const circle of circles) {
    circle.style.display = "block";
  }
  for (const product of products) {
    product.style.display = "block";
  }
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "58% 46%";
  
});

/*------------------------ Product 4 ------------------------------- */
product4.addEventListener("mouseover", function() {
  for (const circle of circles) {
    circle.style.display = "none";
  }
  loungeimage.style.transform = "scale(2)";
  loungeimage.style.transformOrigin = "66.1% 46%";
  for (const product of products) {
    const i=0;
    i=i+1;
    if (i==4){continue;}
    else{ product.style.display = "none"; }
    }
});

product4.addEventListener("mouseout", function() {
  for (const circle of circles) {
    circle.style.display = "block";
  }
  for (const product of products) {
    product.style.display = "block";
  }
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "66.1% 46%";
  
});

/*------------------------ Product 5 ------------------------------- */
product5.addEventListener("mouseover", function() {
  for (const circle of circles) {
    circle.style.display = "none";
  }
  loungeimage.style.transform = "scale(2)";
  loungeimage.style.transformOrigin = "25.3% 69.5%";
  for (const product of products) {
    const i=0;
    i=i+1;
    if (i==5){continue;}
    else{ product.style.display = "none"; }
    }
});

product5.addEventListener("mouseout", function() {
  for (const circle of circles) {
    circle.style.display = "block";
  }
  for (const product of products) {
    product.style.display = "block";
  }
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "25.3% 69.5%";
  
});

/*------------------------ Product 6 ------------------------------- */
product6.addEventListener("mouseover", function() {
  for (const circle of circles) {
    circle.style.display = "none";
  }
  loungeimage.style.transform = "scale(2)";
  loungeimage.style.transformOrigin = "67% 70.5%";
  for (const product of products) {
    const i=0;
    i=i+1;
    if (i==6){continue;}
    else{ product.style.display = "none"; }
    }
});

product6.addEventListener("mouseout", function() {
  for (const circle of circles) {
    circle.style.display = "block";
  }
  for (const product of products) {
    product.style.display = "block";
  }
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "67% 70.5%";
  
});

/*------------------------ Product 7 ------------------------------- */
product7.addEventListener("mouseover", function() {
  for (const circle of circles) {
    circle.style.display = "none";
  }
  loungeimage.style.transform = "scale(2)";
  loungeimage.style.transformOrigin = "79% 75.5%";
  for (const product of products) {
    const i=0;
    i=i+1;
    if (i==7){continue;}
    else{ product.style.display = "none"; }
    }
});

product7.addEventListener("mouseout", function() {
  for (const circle of circles) {
    circle.style.display = "block";
  }
  for (const product of products) {
    product.style.display = "block";
  }
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "79% 75.5%";
  
});

/*------------------------ Product 8 ------------------------------- */
product8.addEventListener("mouseover", function() {
  for (const circle of circles) {
    circle.style.display = "none";
  }
  loungeimage.style.transform = "scale(2)";
  loungeimage.style.transformOrigin = "2% 34%";
  for (const product of products) {
    const i=0;
    i=i+1;
    if (i==8){continue;}
    else{ product.style.display = "none"; }
    }
});

product8.addEventListener("mouseout", function() {
  for (const circle of circles) {
    circle.style.display = "block";
  }
  for (const product of products) {
    product.style.display = "block";
  }
  loungeimage.style.transform = "scale(1)";
  loungeimage.style.transformOrigin = "2% 34%";
  
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