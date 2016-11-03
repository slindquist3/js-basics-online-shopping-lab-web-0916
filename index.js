var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var random = Math.random() * 100
  var price = Math.floor(random)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

// cart = [{carrots: 3},  {}]
// itemObject = {carrots: 3, tom}

function viewCart() {
  	if(cart.length === 0){
   		 // "Your shopping cart is empty."
   		console.log("Your shopping cart is empty.")
   	} else {
   		var list = "In your cart, you have "
   		for(var i = 0; i < cart.length; i++) {
          var itemName = Object.keys(cart[i])[0]
          var price = cart[i][itemName]
   			  list += `${itemName} at $${price}`
            if (i < cart.length - 1){
   				    list += ', '
   			    } else{
   				    list += '.'
   		  }
      }
   	}
   	console.log(list)
  }

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if (item === Object.keys(cart[i])[0]) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}


function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  cart = []
}
