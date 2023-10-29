class Key {
    private signature: number;
    constructor(n: number) {
        this.signature = n;
    }
    getSignature(): number {
        return this.signature;
     }  
}

class Person {
    constructor(private key: Key) {}
    getKey(): Key {
        return this.key
    }
}

abstract class House {
    protected tenants: Person[] = [];
    protected door: boolean;
    constructor(protected key: Key) {
        this.door = false;
     }
     comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Welcome!');
        } else { console.log('Your key is wrong'); }
    }
    public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("door's open")
        } else {
            console.log("door's close")
        }
    }
    }

const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};