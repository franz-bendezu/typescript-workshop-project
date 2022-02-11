type Point = {
  x: number;
  y: number;
};

function printCoord(point: Point) {
  console.log("The coordinate x is " + point.x);
  console.log("The coordinate y is " + point.y);
}
printCoord({ x: 200, y: 200 });
