import axios from "axios";
import { api } from "./api";
import { Cocktail } from "@/types";

export const getAllCocktails = async() =>{
    const respuesta = await api.get(`search.php?f=a`);
    return respuesta;
}