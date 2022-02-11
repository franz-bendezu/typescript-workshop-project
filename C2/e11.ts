function printId2(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId2(1111);
printId2("1111");

function welcomePeople(s: string[] | string) {
  if (Array.isArray(s)) {
    console.log("Hello, ") + s.join(" and ");
  } else {
    console.log("Welcome lone traveler " + s);
  }
}
