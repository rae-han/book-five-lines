
const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum RawTile {
  AIR,
  FLUX,
  UNBREAKABLE,
  PLAYER,
  STONE, FALLING_STONE,
  BOX, FALLING_BOX,
  KEY1, LOCK1,
  KEY2, LOCK2
}

interface Tile {
  isAir(): boolean;
  isFlux(): boolean;
  isUnbreakable(): boolean;
  isPlayer(): boolean;
  isStone(): boolean;
  isFallingStone(): boolean;
  isBox(): boolean;
  isFallingBox(): boolean;
  isKey1(): boolean;
  isLock1(): boolean;
  isKey2(): boolean;
  isLock2(): boolean;
}

class Air implements Tile {
  isAir() {
    return true;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}

class Flux implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return true;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}


class Unbreakable implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return true;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}


class Player implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return true;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}


class Stone implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return true;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}


class FallingStone implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return true;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}


class Box implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return true
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}


class FallingBox implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return true
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}


class Key1 implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return true
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}

class Lock1 implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return true
  }
  isKey2(){
    return false
  }
  isLock2() {
    return false
  }
}

class Key2 implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return true
  }
  isLock2() {
    return false
  }
}

class Lock2 implements Tile {
  isAir() {
    return false;
  }
  isFlux() {
    return false;
  }
  isUnbreakable() {
    return false;
  }
  isPlayer() {
    return false;
  }
  isStone() {
    return false;
  }
  isFallingStone() {
    return false;
  }
  isBox(){
    return false
  }
  isFallingBox(){
    return false
  }
  isKey1(){
    return false
  }
  isLock1() {
    return false
  }
  isKey2(){
    return false
  }
  isLock2() {
    return true
  }
}


enum RawInput {
  UP, DOWN, LEFT, RIGHT
}

interface Input {
  isUp(): boolean;
  isDown(): boolean;
  isLeft(): boolean;
  isRight(): boolean;
  handle(): void;
}

class Up implements Input {
  isUp() {
    return true;
  }
  isDown() {
    return false;
  }
  isLeft() {
    return false;
  }
  isRight() {
    return false;
  }
  handle() {
    moveVertical(-1);
  }
}

class Down implements Input {
  isUp() {
    return false;
  }
  isDown() {
    return true;
  }
  isLeft() {
    return false;
  }
  isRight() {
    return false;
  }
  handle() {
    moveVertical(1);
  }
}

class Left implements Input {
  isUp() {
    return false;
  }
  isDown() {
    return false;
  }
  isLeft() {
    return true;
  }
  isRight() {
    return false;
  }
  handle() {
    moveHorizontal(-1);
  }
}

class Right implements Input {
  isUp() {
    return false;
  }
  isDown() {
    return false;
  }
  isLeft() {
    return false;
  }
  isRight() {
    return true;
  }
  handle() {
    moveHorizontal(1);

  }
}

let playerx = 1;
let playery = 1;
let rawMap: RawTile[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 0, 2],
  [2, 4, 2, 6, 1, 2, 0, 2],
  [2, 8, 4, 1, 1, 2, 0, 2],
  [2, 4, 1, 1, 1, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];
let map: Tile[][]

let inputs: Input[] = [];

const assertExhausted = (x: never): never => {
  throw new Error('Unexpected object: ' + x);
}

const transformTile = (tile: RawTile) => {
  switch (tile) {
    case RawTile.AIR: return new Air();
    case RawTile.PLAYER: return new Player();
    case RawTile.UNBREAKABLE: return new Unbreakable();
    case RawTile.FLUX: return new Flux();
    case RawTile.STONE: return new Stone();
    case RawTile.FALLING_STONE: return new FallingStone();
    case RawTile.BOX: return new Box();
    case RawTile.FALLING_BOX: return new FallingBox();
    case RawTile.KEY1: return new Key1();
    case RawTile.LOCK1: return new Lock1();
    case RawTile.KEY2: return new Key2();
    case RawTile.LOCK2: return new Lock2();
    default: return assertExhausted(tile);
  }
}

const transformMap = () => {
  map = new Array(rawMap.length);

  for (let y = 0; y < rawMap.length; y++) {
    map[y] = new Array(rawMap[y].length);

    for (let x = 0; x < rawMap[y].length; x++) {
      map[y][x] = transformTile(rawMap[y][x])
    }
  }
}

function remove(tile: Tile) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === tile) {
        map[y][x] = new Air();
      }
    }
  }
}

function removeLock1() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock1()) {
        map[y][x] = new Air();
      }
    }
  }
}

function removeLock2() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock2()) {
        map[y][x] = new Air();
      }
    }
  }
}

function moveToTile(newx: number, newy: number) {
  map[playery][playerx] = new Air();
  map[newy][newx] = new Player();
  playerx = newx;
  playery = newy;
}

function moveHorizontal(dx: number) {
  if (map[playery][playerx + dx].isFlux()
    || map[playery][playerx + dx].isAir()) {
    moveToTile(playerx + dx, playery);
  } else if ((map[playery][playerx + dx].isStone()
    || map[playery][playerx + dx].isBox())
    && map[playery][playerx + dx + dx].isAir()
    && !map[playery + 1][playerx + dx].isAir()) {
    map[playery][playerx + dx + dx] = map[playery][playerx + dx];
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey1()) {
    removeLock1();
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey2()) {
    removeLock2();
    moveToTile(playerx + dx, playery);
  }
}

function moveVertical(dy: number) {
  if (map[playery + dy][playerx].isFlux()
    || map[playery + dy][playerx].isAir()) {
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx].isKey1()) {
    removeLock1();
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx].isKey2()) {
    removeLock2();
    moveToTile(playerx, playery + dy);
  }
}

// const handleInput = (input: Input) => {
//   // if (input.isLeft())
//   //   moveHorizontal(-1);
//   // else if (input.isRight())
//   //   moveHorizontal(1);
//   // else if (input.isUp())
//   //   moveVertical(-1);
//   // else if (input.isDown())
//   //   moveVertical(1);
//   input.handle();
// }

const handleInputs = () => {
  while (inputs.length > 0) {
    let input = inputs.pop();

    input.handle()
  }
}

const updateTile = (x: number, y: number) => {
  if ((map[y][x].isStone() || map[y][x].isFallingStone())
    && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingStone();
    map[y][x] = new Air();
  } else if ((map[y][x].isBox() || map[y][x].isFallingBox())
    && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingBox();
    map[y][x] = new Air();
  } else if (map[y][x].isFallingStone()) {
    map[y][x] = new Stone();
  } else if (map[y][x].isFallingBox()) {
    map[y][x] = new Box();
  }
}

const updateMap = () => {
  for (let y = map.length - 1; y >= 0; y--) {
    for (let x = 0; x < map[y].length; x++) {
      updateTile(x, y);
    }
  }
}

function update() {
  handleInputs();
  updateMap();
}

const createGraphics = () => {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");

  g.clearRect(0, 0, canvas.width, canvas.height);

  return g;
}

const colorOfTile = (g: CanvasRenderingContext2D, x: number, y: number) => {
  if (map[y][x].isFlux())
    g.fillStyle = "#ccffcc";
  else if (map[y][x].isUnbreakable())
    g.fillStyle = "#999999";
  else if (map[y][x].isStone() || map[y][x].isFallingStone())
    g.fillStyle = "#0000cc";
  else if (map[y][x].isBox() || map[y][x].isFallingBox())
    g.fillStyle = "#8b4513";
  else if (map[y][x].isKey1() || map[y][x].isLock1())
    g.fillStyle = "#ffcc00";
  else if (map[y][x].isKey2() || map[y][x].isLock2())
    g.fillStyle = "#00ccff";
}

const drawMap = (g: CanvasRenderingContext2D) => {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      colorOfTile(g, x, y)

      if (!map[y][x].isAir() && !map[y][x].isPlayer())
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

const drawPlayer = (g: CanvasRenderingContext2D) => {
  g.fillStyle = "#ff0000";
  g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function draw() {
  const g = createGraphics();

  drawMap(g)
  drawPlayer(g)

}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  transformMap();
  gameLoop();
}

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", e => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
  else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
});

