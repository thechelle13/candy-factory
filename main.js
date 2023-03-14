//create candy place holder - const
// Buy some milk chocolate
// Add some mint flavoring
// Combine the chocolate and mint
// Bake the mixture
// Break the hardened sheet into 6 pieces
// Enjoy

const createCandy = () => {
  // Create a new object. No properties yet.
  const newCandy = {};

  return newCandy;
};
const candy = createCandy();


let buyChocolate = (newCandy) => {
  newCandy.chocolate = "Milk Chocolate";
};
buyChocolate(candy);

let addFlavoring = (newCandy) => {
  newCandy.flavor = "Mint";
};
addFlavoring(candy);


let makeBarkMixture = (newCandy) => {
  newCandy.barkMix = "Bark";
};
if (candy.flavor === "Mint") {
} else {
  candy.flavor = "False";
}

makeBarkMixture(candy);



// The function must verify that the right flavor is being used to make the mixture. If the flavor property on the object is equal to "Mint", then you should add a new mixed property to the object with a value of true. If the flavor is not "Mint" then the property value should be false.

let bakeCandy = (newCandy) => {
  newCandy.bakingCandy = "Cook at 350";
};
// if (candy.flavor === "True") {
// } else {
//   candy.flavor = "False";
// }
bakeCandy(candy);



// The function should check if the mixed property on the incoming object has a value of true. If it does, then add a baked property to the object with a value of true.

// If the mixed property is not true, then add a baked property with a value of false.

let breakCandy = (newCandy) => {
  newCandy.break = "6 pieces";
};
{
// if (candy.flavor === "True") {
//    .push()
// console.log(`Mint Chocolate Bark Piece`)
//return newCandy 
} 

breakCandy(candy);


console.log(`${candy.flavor} ${candy.chocolate} ${candy.break}`);


// If the incoming object's baked property is true, the function should return a new array with 6 strings in it. Each string should be "Mint Chocolate Bark Piece".

// If the baked property value is false, the function should not return anything. This means that the return statement should be inside the if block instead of outside of it.

//Recall: To create a new array, you just need two square brackets. 

// buyChocolate()
// addFlavoring()
// makeBarkMixture()
// bakeCandy()
// breakBark()

// Example code for only returning a value if a condition is true
// if (variable === true) {
// 	return []
// }

