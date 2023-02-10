var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
console.log(shoppingCart);

//  When you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
//  When you know the specific property name, use dot notation to get the property value (alternative system)
var penCount2 = shoppingCart['pen'];
// console.log(penCount2);

var properties = Object.keys(shoppingCart);
// console.log(properties);

var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);

var propertyName = 'mouse';
var propertyValues = shoppingCart[propertyName];
// console.log(propertyName, propertyValues);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
