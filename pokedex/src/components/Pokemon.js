class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.sprite = data.sprites.other['official-artwork'].front_default;
        this.type = data.types[0].type.name
        this.height = data.height
        this.weight = data.weight
        this.abilities = data.abilities.map(ability => ability.ability.name).join(", ");
    }
}

export default Pokemon