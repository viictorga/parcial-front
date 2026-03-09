import axios from "axios";
import { api } from "./api";
import { Cocktail } from "@/types";



export const getCocktailById = async(id: number) =>{
    const respuesta = await api.get(`lookup.php?i=${id}`);
    return respuesta;
}
