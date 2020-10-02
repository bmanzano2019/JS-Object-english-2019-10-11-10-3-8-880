
// 1. Program and observe the following requirements:  
// Create a null object and set its variable name as user; 
let user = {};
// Add a name attribute and set its value as John; 
user.name = 'John';
// Add a surname attribute and set its value as Mike; 
user.surname = 'Mike';
// Modify the value of name attribute as Peter; 
user.name = 'Peter';
// Delete name attribute of user. 
delete user.name

// 2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50. 
let totalFruits = 0;

keys(fruit).forEach(function(key) {
    totalFruits += fruit[key];
})

console.log(totalFruits);