class Pokemon {
    static allPokemon = [];
    //private 
    #health = 100
    #level = 1
    constructor(name, type) {
        this.name = name;
        this.type = Type;

        Pokemon.allPokemon.push(this)

    }
    get health() {
        return this.#heath
    }
    get level() {
        return this.#level

    }
//level up

this.#level += 1
this.#health += 10
console.log(`${this.name} leveled up to level ${this.#level}!`
)
isFainted() {
    return this.#health <= 0;
}
attavl(targetPokemon){
    if (!(targetPokemon instanceof Pokemon)) {
        console.log("Target must be a Pokemon!");
        return;
    }
    static getTotalPokemon(){
        return pokemon.allPokemon.length;
    }
    satic findByName(name {
        return Pokemon.allPokemon.find(p => p.name === name)
    })
}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { Pokemon };
