simpleCart({

  checkout: {
    // type: "PayPal",
    // email: "you@yours.com",
  },

  // tax: 0.075,
  // currency: "THB",

  cartStyle: "table",

  cartColumns: [
    { attr: "name" , label: "Nume" } ,
    { attr: "price" , label: "Preț", view: 'currency' } ,
    { view: "decrement" , label: false , text: "- 1" } ,
    { attr: "quantity" , label: "Cantitate" } ,
    { view: "increment" , label: false , text: "+ 1" } ,
    { attr: "total" , label: "SubTotal", view: 'currency' } ,
    { view: "remove" , text: "Șterge" , label: false }
  ]

});

// simpleCart.currency({
  // code: "THB",
  // name: "Thai Baht",
  // symbol: "&#3647;",
  // delimiter: " ",
  // decimal: ",",
  // after: true,
  // accuracy: 0
// });

//* Refresh cart once simpleCart is ready to listen.
simpleCart.ready(function() {
  simpleCart.update();
});
