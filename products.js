//Iterating through all products and applying product specific properties

var originalprices = document.querySelectorAll('.originalprice');
var newprices = document.querySelectorAll('.newprice');
const discountpercentages =  document.querySelectorAll('.discountpercentage');

function calculatediscount(oripricing, newpricing){
    oripricing = parseFloat(oripricing);
    newpricing = parseFloat(newpricing);
    var discount = ( (oripricing - newpricing) / oripricing) * 100 ;
    discount = Math.floor(discount);
    return discount
};

for (let i = 0; i < originalprices.length; i++){
    var oripricing = originalprices[i].textContent.trim(); //Removing Whitespaces
    var newpricing = newprices[i].textContent.trim(); //Removing Whitespaces
    
    //Calculating discount percentage through function
    discount = calculatediscount(oripricing, newpricing);
    discountpercentages[i].textContent = `${discount}% off`;

}



//Drop Down slider on clicking sort button
var sortclickcount= 0; //global variable
var sortbutton = document.getElementById("sortbutton");
var dropdown = document.getElementById("dropdownlist");


function dropdownlist(wide, pad, high){
    if (!sortclickcount){
        dropdown.style.width = `${wide}vw`;
        dropdown.style.padding = `${pad}vw`;
        dropdown.style.height = `${high}vh`;
        sortclickcount = 1;
    }
    else{
        dropdown.style.width = "0%";
        dropdown.style.padding = "0vw";
        dropdown.style.transition = "height 0.2s ease-in-out"
        dropdown.style.height = "0%";
        sortclickcount = 0;
    }
}

sortbutton.addEventListener("click", function(){
    // Check for touch support (in mobile devices)
    const isTouchDevice = 'ontouchstart' in document.documentElement;
    if (!isTouchDevice) {
        dropdownlist(12, 1, 20);
      } else {
        dropdownlist(40, 3, 17);
      }
});