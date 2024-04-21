class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.sprite = data.sprites.front_default
        this.type = data.types.map(type => type.type.name).join(", ");
        this.height = data.height
        this.weight = data.weight
        this.abilities = data.abilities.map(ability => ability.ability.name).join(", ");
    }
}

export default Pokemon