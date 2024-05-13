// interface Bird {
//   hasBeak(): boolean;
//   canFly(): boolean;
// }
//
// class CommonBird implements Bird {
//   hasBeak() {
//     return true;
//   }
//
//   canFly() {
//     return true;
//   }
// }
//
// class Penguin extends CommonBird {
// }
//
// const penguin = new Penguin();
//
// console.log(penguin.hasBeak()); // Error

interface Bird {
  hasBeak(): boolean;
  canFly(): boolean;
}

class CommonBird implements Bird {
  hasBeak() {
    return true;
  }

  canFly() {
    return true;
  }
}

class Penguin implements Bird {
  private bird = new CommonBird();
  hasBeak(): boolean {
    return this.bird.hasBeak();
  }
  canFly(): boolean {
    return false
  }
}

const penguin = new Penguin();

console.log(penguin.hasBeak());
console.log(penguin.canFly());