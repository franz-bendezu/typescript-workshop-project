/** 
function printFullName(p:{firstName:   string, lastName ?: string}){
    console.log(`${p.firstName} ${p.lastName}`)
}
**/
function printFullName(p: { firstName: string; lastName?: string }) {
  if (p.lastName !== undefined) {
    console.log(`${p.firstName} ${p.lastName.toUpperCase()}`);
  } else {
    console.log(`${p.firstName} `);
  }
}

printFullName({
  firstName: "Bob",
});

printFullName({
  firstName: "Alice",
  lastName: "Alisson",
});
