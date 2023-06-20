/* const user = {};
user.name = 'John';
console.log(user.name);
user.surname = 'Smith';
console.log(user.surname);

user.name = 'Pete';
console.log(user.name);
delete user.name;

console.log(user); */

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}