function scrollToSection() {
  let section = document.getElementById('product-container');
  section.scrollIntoView({ behavior: 'smooth' });
}

function openCart(){
  let cart_space = document.getElementById('cart');
  cart_space.style.opacity = 1;
}

let price_array = [];

if (document.getElementById("cart-items").childElementCount === 0){
  document.getElementById("total-area").textContent = "Cart is empty";
}

function addToCart(name, price, productId) {
  let quantityInputId = "quantity" + productId;
  let quantity = parseInt(document.getElementById(quantityInputId).value);
  
  // Check if the product has color and size options
  if (document.getElementById('colour' + productId) && document.getElementById('size' + productId)) {
    let colourInputId = "colour" + productId;
    let sizeInputId = "size" + productId;
    let colour = document.getElementById(colourInputId).value;
    let size = document.getElementById(sizeInputId).value;

    let cartItem = document.createElement("li");
    cartItem.textContent = name + " - " + colour + " - " + size + " - $" + price + " x " + quantity;
    document.getElementById("cart-items").appendChild(cartItem.cloneNode(true));
    document.getElementById("cart-items-c").appendChild(cartItem.cloneNode(true));
  } else {
    // Product does not have color and size options
    let cartItem = document.createElement("li");
    cartItem.textContent = name + " - $" + price + " x " + quantity;
    document.getElementById("cart-items").appendChild(cartItem.cloneNode(true));
    document.getElementById("cart-items-c").appendChild(cartItem.cloneNode(true));
  }

  price_array.push(price * quantity);
  calcTotal();
}


function calcTotal() {
    let total = price_array.reduce((acc, curr) => acc + curr, 0);
    document.getElementById("total-area").textContent = "Total is: $" + total.toFixed(2); //add to total
    document.getElementById("total-area-c").textContent = "Total is: $" + total.toFixed(2); //add to checkout total
}

function resetCart() {
  // Reset cart items and total area
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("total-area").textContent = "";
  document.getElementById("cart-items-c").textContent = "";
  // Reset price_array
  price_array = [];
}

// Get a reference to the cart element
let cart_space = document.getElementById('cart');

// Add event listener to detect scrolling
window.onscroll = function() {
    // Get the vertical scroll position
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    //100 pixels 
    if (scrollPosition > 200) {
        // If scrolled past the threshold, set cart opacity to 0
        cart_space.style.opacity = 0;
    } else {
        // If not scrolled past the threshold, set cart opacity to 1
        cart_space.style.opacity = 1;
    }
}

function checkOut(){
  var overlay = document.getElementById("overlay");
  if (document.getElementById("cart-items").childElementCount === 0){
    alert("Your cart is empty");
  }else{
    if (overlay.style.display === "block") {
      overlay.style.display = "none"; // Hide the overlay
    } else {
      overlay.style.display = "block"; // Show the overlay
    }
  }

}

document.getElementById('colour1').addEventListener("change", changeImg1);

function changeImg1(){
  // Get the selected color value
  let colour = document.getElementById('colour1').value;
  // Get the image element
  let image = document.getElementById('product1_img');

  //image paths for different colors
  let imagePath = "";
  switch (colour) {
    case 'white':
      imagePath = "/Product_images/Product1/product1_white.jpg";
      break;
    case 'ivory':
      imagePath = "/Product_images/Product1/product1_ivory.jpg";
      break;
    case 'lightblue':
      imagePath = "/Product_images/Product1/product1_lightb.jpg";
      break;
    case 'mint':
      imagePath = "/Product_images/Product1/product1_mint.jpg";
      break;
    case 'grey':
      imagePath = "/Product_images/Product1/product1_grey.jpg";
      break;
    default:
      imagePath = "/Product_images/Product1/product1_white.jpg"; // Default image if color not found
  }

  // Set the image source to the selected color's image path
  image.src = imagePath;
}

document.getElementById('colour2').addEventListener("change", changeImg2);

function changeImg2(){
  // Get the selected color value
  let colour = document.getElementById('colour2').value;
  // Get the image element
  let image = document.getElementById('product2_img');

  //image paths for different colors
  let imagePath = "";
  switch (colour) {
    case 'white':
      imagePath = "/Product_images/Product2/product2_white.jpg";
      break;
    case 'ivory':
      imagePath = "/Product_images/Product2/product2_ivory.jpg";
      break;
    case 'lightblue':
      imagePath = "/Product_images/Product2/product2_lightb.jpg";
      break;
    case 'mint':
      imagePath = "/Product_images/Product2/product2_mint.jpg";
      break;
    case 'grey':
      imagePath = "/Product_images/Product2/product2_grey.jpg";
      break;
    default:
      imagePath = "/Product_images/Product2/product2_mint.jpg"; // Default image if color not found
  }

  // Set the image source to the selected color's image path
  image.src = imagePath;
}

document.getElementById('colour4').addEventListener("change", changeImg4);

function changeImg4(){
  // Get the selected color value
  let colour = document.getElementById('colour4').value;
  // Get the image element
  let image = document.getElementById('product4_img');

  //image paths for different colors
  let imagePath = "";
  switch (colour) {
    case 'white':
      imagePath = "/Product_images/Product4/mug_white.jpg";
      break;
    case 'black':
      imagePath = "/Product_images/Product4/mug_black.jpg";
      break;
    default:
      imagePath = "/Product_images/Product4/mug_white.jpg"; // Default image if color not found
  }

  // Set the image source to the selected color's image path
  image.src = imagePath;
}

function resetForms() {
  document.getElementById('form1').reset();
  document.getElementById('form2').reset();
  document.getElementById('form3').reset();
}

function submitForms() {
  document.getElementById('form1').submit();
  document.getElementById('form2').submit();
  document.getElementById('form3').submit();
}
