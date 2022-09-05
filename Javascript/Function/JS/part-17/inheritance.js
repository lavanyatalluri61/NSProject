class Car {
    constructor(wheels) {
        this.steering = 1;
        this.wheels = wheels;
    }
    honk() {
        console.log("Beep Beep!!");
    }
}

const c1 = new Car(4);
console.log(c1);
c1.honk();

class Honda extends Car {
    //Even if the below constructor is not there, we still ge the wheels value as 4
    //because there is an internal default constructor which will be called by compiler
    // constructor(wheels) {
    //     super(wheels)
    // }
    enginee() {
        console.log("Enginee ivtec");
    }
}
const h1 = new Honda(4);
console.log(h1);
h1.enginee();

class Maruti extends Car {
    constructor(wheels) {
        super(wheels);
    }
    service() {
        console.log("Cheaper service");
    }
}
const m1 = new Maruti(4);
console.log(m1);
m1.service();











