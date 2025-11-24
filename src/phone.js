

class Phone {
    #password;
    constructor(brand, model, password) {
        this.brand = brand;
        this.model = model;
        this, #password = password;
        thid.batterylevel = 100;
    }

    makeCall(number) {
        this.batteryLeve -= 5;
        return `calling ${number}`;
    }
    charge() {
        this.batteryLevel = 100;
        return "Phone fully charged";
    }
    unlock(password) {
        if (password === this.#password) {
            return true;

        }
        else {
            return false
        }
    }



class iPhone extends phone {
    constructor(model, password, numberOfCameras) {
        super("Apple", model, password)
        this.numberOfCameras = numberOfCameras

    }
    makeCall(number) {
        this.batteryLevel -= 5
        return `Calling ${number} using FaceTime audio`

    }
    faceTime(name) {
        this.batterLevel -= 10
        return `Facetimeing ${name}`
    }
}


// TEST YOUR CODE HERE


// DO NOT REMOVE
module.exports = { Phone, iPhone };
