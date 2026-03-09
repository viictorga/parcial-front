import axios from "axios";
import { api } from "./api";
import { Cocktail } from "@/types";

type RespuestaFea = {
    drinks: Cocktail[]
}

export const getCocktailRandom = async() =>{
    const respuesta = await api.get<RespuestaFea>(`/random.php`);
    return respuesta.data.drinks[0];
}
