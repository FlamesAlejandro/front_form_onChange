import { Axios } from "../../config/axios"

const Abilities = () => {
    return Axios().get("ability/?limit=20&offset=20");
}

export const ApiPokemon = {
    Abilities
}